import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { useStorage } from '@vueuse/core'

export interface PuzzleCell {
  color: string
  nationality: string
  drink: string
  cigarette: string
  pet: string
}

export interface PuzzleHint {
  id: number
  text: string
  isRevealed: boolean
  isResolved: boolean
}

const PUZZLE_HINTS: PuzzleHint[] = [
  { id: 1, text: 'O inglês vive na casa vermelha.', isRevealed: true, isResolved: false },
  {
    id: 2,
    text: 'O sueco tem cachorros como animais de estimação.',
    isRevealed: true,
    isResolved: false,
  },
  { id: 3, text: 'O dinamarquês bebe chá.', isRevealed: true, isResolved: false },
  {
    id: 4,
    text: 'A casa verde fica imediatamente à esquerda da casa branca.',
    isRevealed: true,
    isResolved: false,
  },
  { id: 5, text: 'O dono da casa verde bebe café.', isRevealed: true, isResolved: false },
  {
    id: 6,
    text: 'A pessoa que fuma Pall Mall cria pássaros.',
    isRevealed: true,
    isResolved: false,
  },
  { id: 7, text: 'O dono da casa amarela fuma Dunhill.', isRevealed: true, isResolved: false },
  {
    id: 8,
    text: 'O homem que vive na casa do meio bebe leite.',
    isRevealed: true,
    isResolved: false,
  },
  { id: 9, text: 'O norueguês vive na primeira casa.', isRevealed: true, isResolved: false },
  {
    id: 10,
    text: 'O homem que fuma Blends vive ao lado do que tem gatos.',
    isRevealed: true,
    isResolved: false,
  },
  {
    id: 11,
    text: 'O homem que cria cavalos vive ao lado do que fuma Dunhill.',
    isRevealed: true,
    isResolved: false,
  },
  {
    id: 12,
    text: 'O homem que fuma Blue Master bebe cerveja.',
    isRevealed: true,
    isResolved: false,
  },
  { id: 13, text: 'O alemão fuma Prince.', isRevealed: true, isResolved: false },
  { id: 14, text: 'O norueguês vive ao lado da casa azul.', isRevealed: true, isResolved: false },
  {
    id: 15,
    text: 'O homem que fuma Blends é vizinho do que bebe água.',
    isRevealed: true,
    isResolved: false,
  },
]

const SOLUTION: PuzzleCell[] = [
  { color: 'Amarela', nationality: 'Norueguês', drink: 'Água', cigarette: 'Dunhill', pet: 'Gatos' },
  { color: 'Azul', nationality: 'Dinamarquês', drink: 'Chá', cigarette: 'Blends', pet: 'Cavalos' },
  {
    color: 'Vermelha',
    nationality: 'Inglês',
    drink: 'Leite',
    cigarette: 'Pall Mall',
    pet: 'Pássaros',
  },
  { color: 'Verde', nationality: 'Alemão', drink: 'Café', cigarette: 'Prince', pet: 'Peixes' },
  {
    color: 'Branca',
    nationality: 'Sueco',
    drink: 'Cerveja',
    cigarette: 'Blue Master',
    pet: 'Cachorros',
  },
]

export const usePuzzleStore = defineStore('puzzle', () => {
  // Estado persistente no localStorage
  const grid = useStorage<PuzzleCell[]>('einstein-grid', () => [
    { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
    { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
    { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
    { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
    { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
  ])

  const hints = useStorage<PuzzleHint[]>('einstein-hints', () => [...PUZZLE_HINTS])
  const startTime = useStorage<number>('einstein-start-time', () => Date.now())
  const errors = useStorage<number>('einstein-errors', 0)
  const isCompleted = useStorage<boolean>('einstein-completed', false)
  const gameStarted = useStorage<boolean>('einstein-game-started', false)
  const playerName = ref('')

  // Estado não persistente
  const currentTime = ref(Date.now())
  const isCheckingResults = ref(false)

  // Computed
  const elapsedTime = computed(() => {
    if (!gameStarted.value) return 0
    return Math.floor((currentTime.value - startTime.value) / 1000)
  })

  const formattedTime = computed(() => {
    const minutes = Math.floor(elapsedTime.value / 60)
    const seconds = elapsedTime.value % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  })

  const allHints = computed(() => {
    return hints.value.map((hint) => ({
      ...hint,
      isResolved: checkHintResolved(hint.id),
    }))
  })

  const filledCells = computed(() => {
    return grid.value.reduce((count, cell) => {
      return count + Object.values(cell).filter((value) => value !== '').length
    }, 0)
  })

  const completionPercentage = computed(() => {
    const totalCells = 25 // 5x5 grid
    return Math.round((filledCells.value / totalCells) * 100)
  })

  const resolvedHintsCount = computed(() => {
    return allHints.value.filter((hint) => hint.isResolved).length
  })

  // Opções disponíveis para os dropdowns
  const options = {
    colors: ['Amarela', 'Azul', 'Vermelha', 'Verde', 'Branca'],
    nationalities: ['Norueguês', 'Dinamarquês', 'Inglês', 'Alemão', 'Sueco'],
    drinks: ['Água', 'Chá', 'Leite', 'Café', 'Cerveja'],
    cigarettes: ['Dunhill', 'Blends', 'Pall Mall', 'Prince', 'Blue Master'],
    pets: ['Gatos', 'Cavalos', 'Pássaros', 'Peixes', 'Cachorros'],
  }

  // Individual option arrays for easier access
  const colorOptions = computed(() => options.colors)
  const nationalityOptions = computed(() => options.nationalities)
  const drinkOptions = computed(() => options.drinks)
  const cigaretteOptions = computed(() => options.cigarettes)
  const petOptions = computed(() => options.pets)

  // Função para verificar se uma dica específica foi resolvida
  function checkHintResolved(hintId: number): boolean {
    const currentGrid = grid.value

    switch (hintId) {
      case 1: // O inglês vive na casa vermelha
        return currentGrid.some(
          (cell) => cell.nationality === 'Inglês' && cell.color === 'Vermelha',
        )

      case 2: // O sueco tem cachorros como animais de estimação
        return currentGrid.some((cell) => cell.nationality === 'Sueco' && cell.pet === 'Cachorros')

      case 3: // O dinamarquês bebe chá
        return currentGrid.some(
          (cell) => cell.nationality === 'Dinamarquês' && cell.drink === 'Chá',
        )

      case 4: // A casa verde fica imediatamente à esquerda da casa branca
        for (let i = 0; i < 4; i++) {
          if (currentGrid[i].color === 'Verde' && currentGrid[i + 1].color === 'Branca') {
            return true
          }
        }
        return false

      case 5: // O dono da casa verde bebe café
        return currentGrid.some((cell) => cell.color === 'Verde' && cell.drink === 'Café')

      case 6: // A pessoa que fuma Pall Mall cria pássaros
        return currentGrid.some((cell) => cell.cigarette === 'Pall Mall' && cell.pet === 'Pássaros')

      case 7: // O dono da casa amarela fuma Dunhill
        return currentGrid.some((cell) => cell.color === 'Amarela' && cell.cigarette === 'Dunhill')

      case 8: // O homem que vive na casa do meio bebe leite
        return currentGrid[2].drink === 'Leite' // Casa 3 (índice 2)

      case 9: // O norueguês vive na primeira casa
        return currentGrid[0].nationality === 'Norueguês' // Casa 1 (índice 0)

      case 10: // O homem que fuma Blends vive ao lado do que tem gatos
        for (let i = 0; i < 5; i++) {
          if (currentGrid[i].cigarette === 'Blends') {
            const leftNeighbor = i > 0 ? currentGrid[i - 1] : null
            const rightNeighbor = i < 4 ? currentGrid[i + 1] : null
            if (
              (leftNeighbor && leftNeighbor.pet === 'Gatos') ||
              (rightNeighbor && rightNeighbor.pet === 'Gatos')
            ) {
              return true
            }
          }
        }
        return false

      case 11: // O homem que cria cavalos vive ao lado do que fuma Dunhill
        for (let i = 0; i < 5; i++) {
          if (currentGrid[i].pet === 'Cavalos') {
            const leftNeighbor = i > 0 ? currentGrid[i - 1] : null
            const rightNeighbor = i < 4 ? currentGrid[i + 1] : null
            if (
              (leftNeighbor && leftNeighbor.cigarette === 'Dunhill') ||
              (rightNeighbor && rightNeighbor.cigarette === 'Dunhill')
            ) {
              return true
            }
          }
        }
        return false

      case 12: // O homem que fuma Blue Master bebe cerveja
        return currentGrid.some(
          (cell) => cell.cigarette === 'Blue Master' && cell.drink === 'Cerveja',
        )

      case 13: // O alemão fuma Prince
        return currentGrid.some(
          (cell) => cell.nationality === 'Alemão' && cell.cigarette === 'Prince',
        )

      case 14: // O norueguês vive ao lado da casa azul
        for (let i = 0; i < 5; i++) {
          if (currentGrid[i].nationality === 'Norueguês') {
            const leftNeighbor = i > 0 ? currentGrid[i - 1] : null
            const rightNeighbor = i < 4 ? currentGrid[i + 1] : null
            if (
              (leftNeighbor && leftNeighbor.color === 'Azul') ||
              (rightNeighbor && rightNeighbor.color === 'Azul')
            ) {
              return true
            }
          }
        }
        return false

      case 15: // O homem que fuma Blends é vizinho do que bebe água
        for (let i = 0; i < 5; i++) {
          if (currentGrid[i].cigarette === 'Blends') {
            const leftNeighbor = i > 0 ? currentGrid[i - 1] : null
            const rightNeighbor = i < 4 ? currentGrid[i + 1] : null
            if (
              (leftNeighbor && leftNeighbor.drink === 'Água') ||
              (rightNeighbor && rightNeighbor.drink === 'Água')
            ) {
              return true
            }
          }
        }
        return false

      default:
        return false
    }
  }

  // Actions
  function startGame(name: string) {
    playerName.value = name
    gameStarted.value = true
    startTime.value = Date.now()
  }

  function startGameWithSolution(name: string) {
    playerName.value = name
    gameStarted.value = true
    startTime.value = Date.now()

    // Fill the grid with the correct solution
    grid.value = [
      {
        color: 'Amarela',
        nationality: 'Norueguês',
        drink: 'Água',
        cigarette: 'Dunhill',
        pet: 'Gatos',
      },
      {
        color: 'Azul',
        nationality: 'Dinamarquês',
        drink: 'Chá',
        cigarette: 'Blends',
        pet: 'Cavalos',
      },
      {
        color: 'Vermelha',
        nationality: 'Inglês',
        drink: 'Leite',
        cigarette: 'Pall Mall',
        pet: 'Pássaros',
      },
      { color: 'Verde', nationality: 'Alemão', drink: 'Café', cigarette: 'Prince', pet: 'Peixes' },
      {
        color: 'Branca',
        nationality: 'Sueco',
        drink: 'Cerveja',
        cigarette: 'Blue Master',
        pet: 'Cachorros',
      },
    ]

    // Mark as completed automatically after a short delay to show the solution
    setTimeout(() => {
      isCompleted.value = true
    }, 2000)
  }

  function updateCell(houseIndex: number, attribute: keyof PuzzleCell, value: string) {
    // Iniciar o jogo na primeira interação se ainda não foi iniciado
    if (!gameStarted.value) {
      gameStarted.value = true
      startTime.value = Date.now()
    }

    grid.value[houseIndex][attribute] = value

    // Verificar se todas as dicas foram resolvidas automaticamente
    setTimeout(() => {
      if (resolvedHintsCount.value === 15 && !isCompleted.value) {
        isCompleted.value = true
      }
    }, 100)
  }

  function checkSolution(): boolean {
    isCheckingResults.value = true

    let isCorrect = true
    for (let i = 0; i < 5; i++) {
      const cell = grid.value[i]
      const solution = SOLUTION[i]

      if (
        cell.color !== solution.color ||
        cell.nationality !== solution.nationality ||
        cell.drink !== solution.drink ||
        cell.cigarette !== solution.cigarette ||
        cell.pet !== solution.pet
      ) {
        isCorrect = false
        break
      }
    }

    if (!isCorrect) {
      errors.value++
    } else {
      isCompleted.value = true
    }

    setTimeout(() => {
      isCheckingResults.value = false
    }, 1000)

    return isCorrect
  }

  function finishGame() {
    isCompleted.value = true
  }

  function resetPuzzle() {
    grid.value = [
      { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
      { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
      { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
      { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
      { color: '', nationality: '', drink: '', cigarette: '', pet: '' },
    ]

    hints.value = [...PUZZLE_HINTS]
    startTime.value = Date.now()
    errors.value = 0
    isCompleted.value = false
    gameStarted.value = false
    playerName.value = ''
  }

  function updateTimer() {
    if (!isCompleted.value && gameStarted.value) {
      currentTime.value = Date.now()
    }
  }

  // Iniciar timer
  setInterval(updateTimer, 1000)

  return {
    // State
    grid,
    hints,
    startTime,
    errors,
    isCompleted,
    isCheckingResults,
    gameStarted,
    playerName,

    // Computed
    elapsedTime,
    formattedTime,
    allHints,
    filledCells,
    completionPercentage,
    resolvedHintsCount,
    options,
    colorOptions,
    nationalityOptions,
    drinkOptions,
    cigaretteOptions,
    petOptions,

    // Aliases for compatibility
    errorCount: errors,

    // Actions
    startGame,
    startGameWithSolution,
    updateCell,
    checkSolution,
    finishGame,
    resetPuzzle,
    updateTimer,
  }
})
