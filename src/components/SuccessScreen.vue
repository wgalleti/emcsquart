<template>
  <div class="max-w-4xl mx-auto">
    <div
      class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 text-center animate-fade-in"
    >
      <!-- Celebration -->
      <div class="mb-8">
        <div class="text-8xl mb-6 animate-bounce-celebration">🎉</div>
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Parabéns, {{ puzzleStore.playerName }}!
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">Você resolveu o Enigma de Einstein</p>
      </div>

      <!-- Achievement Badge -->
      <div
        class="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-8 mb-8 border border-purple-200 dark:border-purple-700"
      >
        <div
          class="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg animate-pulse"
        >
          🏆
        </div>
        <h2 class="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
          Membro do 2% Elite!
        </h2>
        <p class="text-purple-700 dark:text-purple-300 leading-relaxed">
          Apenas <strong>2% da população mundial</strong> consegue resolver este quebra-cabeça
          lógico. Você acabou de se juntar a um grupo muito seleto de pessoas!
        </p>
      </div>

      <!-- Statistics -->
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div
          class="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50"
        >
          <div class="text-3xl text-emerald-600 dark:text-emerald-400 mb-2">⏱️</div>
          <div class="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-1">
            {{ puzzleStore.formattedTime }}
          </div>
          <p class="text-sm text-emerald-700 dark:text-emerald-300">Tempo Total</p>
        </div>

        <div
          class="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50"
        >
          <div class="text-3xl text-blue-600 dark:text-blue-400 mb-2">✅</div>
          <div class="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-1">
            {{ puzzleStore.resolvedHintsCount }}/15
          </div>
          <p class="text-sm text-blue-700 dark:text-blue-300">Dicas Resolvidas</p>
        </div>

        <div
          class="bg-orange-50 dark:bg-orange-950/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800/50"
        >
          <div class="text-3xl text-orange-600 dark:text-orange-400 mb-2">🎯</div>
          <div class="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-1">
            {{ puzzleStore.errorCount }}
          </div>
          <p class="text-sm text-orange-700 dark:text-orange-300">Tentativas Erradas</p>
        </div>
      </div>

      <!-- Performance Analysis -->
      <div class="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-8">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
          📊 Análise de Performance
        </h3>
        <div class="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Velocidade de Resolução:
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ getPerformanceText() }}
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">Precisão:</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ getAccuracyText() }}
            </p>
          </div>
        </div>
      </div>

      <!-- Fun Facts -->
      <div class="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 mb-8 text-left">
        <h3 class="text-lg font-bold text-purple-900 dark:text-purple-100 mb-4 text-center">
          🧠 Curiosidades sobre o Enigma
        </h3>
        <div class="space-y-3 text-sm text-purple-700 dark:text-purple-300">
          <p>
            • <strong>Albert Einstein</strong> criou este puzzle para testar a capacidade de
            raciocínio lógico das pessoas.
          </p>
          <p>
            • O tempo médio para resolver é entre <strong>30 a 60 minutos</strong> para quem
            consegue.
          </p>
          <p>
            • Existem mais de <strong>9 bilhões</strong> de combinações possíveis, mas apenas uma
            solução correta!
          </p>
          <p>• O alemão sempre tem o peixe na solução correta - você descobriu isso? 🐟</p>
        </div>
      </div>

      <!-- Actions -->
      <div class="space-y-4">
        <button
          @click="playAgain"
          class="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-purple-lg transform hover:-translate-y-1 transition-all duration-200 text-lg mr-4"
        >
          🔄 Jogar Novamente
        </button>

        <button
          @click="sharResult"
          class="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-emerald-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
        >
          📤 Compartilhar Resultado
        </button>
      </div>

      <div class="mt-6 text-xs text-gray-500 dark:text-gray-400">
        Obrigado por jogar! Você é realmente especial! ✨
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePuzzleStore } from '../stores/puzzle'
import { clearGameData } from '../utils/storage'

const puzzleStore = usePuzzleStore()

const getPerformanceText = () => {
  const timeInMinutes = Math.floor(puzzleStore.elapsedTime / 60)

  if (timeInMinutes < 15) {
    return '🚀 Incrivelmente rápido! Você tem uma mente brilhante.'
  } else if (timeInMinutes < 30) {
    return '⚡ Muito rápido! Acima da média da maioria das pessoas.'
  } else if (timeInMinutes < 45) {
    return '👍 Bom tempo! Dentro da faixa esperada para este puzzle.'
  } else {
    return '🎯 Persistente! A paciência é uma virtude valiosa.'
  }
}

const getAccuracyText = () => {
  const errors = puzzleStore.errorCount

  if (errors === 0) {
    return '🎯 Perfeito! Nenhum erro cometido. Impressionante!'
  } else if (errors <= 2) {
    return '✨ Excelente! Poucos erros demonstram precisão.'
  } else if (errors <= 5) {
    return '👌 Bom! Alguns erros são normais no processo de aprendizagem.'
  } else {
    return '💪 Determinado! Cada erro foi um passo em direção à solução.'
  }
}

const playAgain = () => {
  if (
    confirm(
      '🔄 Iniciar um novo jogo? O progresso atual será perdido, mas suas configurações (como tema) serão mantidas.',
    )
  ) {
    // Clear only game data, preserve user settings (theme, etc.)
    clearGameData()

    // Reset puzzle store
    puzzleStore.resetPuzzle()

    // Reload page to ensure clean state
    window.location.reload()
  }
}

const sharResult = () => {
  const text = `🧠 Acabei de resolver o Enigma de Einstein! ⏱️ Tempo: ${puzzleStore.formattedTime} | ✅ Dicas: ${puzzleStore.resolvedHintsCount}/15 | 🎯 Erros: ${puzzleStore.errorCount}

Apenas 2% das pessoas conseguem resolver este quebra-cabeça lógico! 🏆

#EinsteinsRiddle #PuzzleLogico #Inteligencia`

  if (navigator.share) {
    navigator.share({
      title: 'Resolvi o Enigma de Einstein!',
      text: text,
      url: window.location.href,
    })
  } else {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('📋 Resultado copiado para a área de transferência!')
      })
      .catch(() => {
        alert('📝 Texto do resultado:\n\n' + text)
      })
  }
}
</script>

<style scoped>
/* Animations */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.animate-bounce-celebration {
  animation: bounceCelebration 2s ease-in-out infinite;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes bounceCelebration {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

/* Button hover effects */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Pulse animation for trophy */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
