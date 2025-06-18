<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-5 h-full flex flex-col"
  >
    <h2
      class="text-base font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-3 flex-shrink-0"
    >
      🏠 Grade do Enigma
      <span
        class="text-xs text-gray-500 dark:text-gray-400 font-normal bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
      >
        {{ puzzleStore.completionPercentage }}% completo
      </span>
      <span
        v-if="!puzzleStore.gameStarted"
        class="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800"
      >
        Aguardando início
      </span>
    </h2>

    <!-- Grid Container -->
    <div class="flex-1 overflow-auto">
      <div class="min-w-full">
        <!-- Houses Header (Colunas) -->
        <div class="grid grid-cols-6 gap-3 mb-4 sticky top-0 bg-white dark:bg-gray-800 z-10 pb-2">
          <div class="text-center">
            <div class="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">ATRIBUTO</div>
            <div
              class="h-7 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-lg flex items-center justify-center text-xs font-bold text-purple-700 dark:text-purple-300 shadow-sm"
            >
              📋
            </div>
          </div>
          <div v-for="house in 5" :key="`house-${house}`" class="text-center">
            <div class="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
              CASA {{ house }}
            </div>
            <div
              class="h-7 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-300 shadow-sm"
            >
              🏠 {{ house }}
            </div>
          </div>
        </div>

        <!-- Grid Rows (Atributos) -->
        <div class="space-y-3">
          <!-- Cor -->
          <div class="grid grid-cols-6 gap-3">
            <div
              class="flex items-center justify-center h-10 bg-gradient-to-r from-rose-100 to-rose-200 dark:from-rose-900/30 dark:to-rose-800/30 rounded-lg text-xs font-bold text-rose-700 dark:text-rose-300 shadow-sm border border-rose-200 dark:border-rose-800/50 px-2"
            >
              🎨 Cor
            </div>
            <div v-for="house in 5" :key="`color-${house}`" class="h-10">
              <PuzzleSelect
                :modelValue="puzzleStore.grid[house - 1].color"
                @update:modelValue="(value) => updateCell(house - 1, 'color', value)"
                :options="puzzleStore.colorOptions"
                placeholder="Cor"
                class="h-full"
              />
            </div>
          </div>

          <!-- Nacionalidade -->
          <div class="grid grid-cols-6 gap-3">
            <div
              class="flex items-center justify-center h-10 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg text-xs font-bold text-blue-700 dark:text-blue-300 shadow-sm border border-blue-200 dark:border-blue-800/50 px-1"
            >
              🌍 País
            </div>
            <div v-for="house in 5" :key="`nationality-${house}`" class="h-10">
              <PuzzleSelect
                :modelValue="puzzleStore.grid[house - 1].nationality"
                @update:modelValue="(value) => updateCell(house - 1, 'nationality', value)"
                :options="puzzleStore.nationalityOptions"
                placeholder="País"
                class="h-full"
              />
            </div>
          </div>

          <!-- Bebida -->
          <div class="grid grid-cols-6 gap-3">
            <div
              class="flex items-center justify-center h-10 bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-lg text-xs font-bold text-amber-700 dark:text-amber-300 shadow-sm border border-amber-200 dark:border-amber-800/50 px-2"
            >
              🥤 Bebida
            </div>
            <div v-for="house in 5" :key="`drink-${house}`" class="h-10">
              <PuzzleSelect
                :modelValue="puzzleStore.grid[house - 1].drink"
                @update:modelValue="(value) => updateCell(house - 1, 'drink', value)"
                :options="puzzleStore.drinkOptions"
                placeholder="Bebida"
                class="h-full"
              />
            </div>
          </div>

          <!-- Cigarro -->
          <div class="grid grid-cols-6 gap-3">
            <div
              class="flex items-center justify-center h-10 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg text-xs font-bold text-orange-700 dark:text-orange-300 shadow-sm border border-orange-200 dark:border-orange-800/50 px-1"
            >
              🚬 Cigarro
            </div>
            <div v-for="house in 5" :key="`cigarette-${house}`" class="h-10">
              <PuzzleSelect
                :modelValue="puzzleStore.grid[house - 1].cigarette"
                @update:modelValue="(value) => updateCell(house - 1, 'cigarette', value)"
                :options="puzzleStore.cigaretteOptions"
                placeholder="Cigarro"
                class="h-full"
              />
            </div>
          </div>

          <!-- Animal -->
          <div class="grid grid-cols-6 gap-3">
            <div
              class="flex items-center justify-center h-10 bg-gradient-to-r from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-300 shadow-sm border border-emerald-200 dark:border-emerald-800/50 px-2"
            >
              🐾 Animal
            </div>
            <div v-for="house in 5" :key="`pet-${house}`" class="h-10">
              <PuzzleSelect
                :modelValue="puzzleStore.grid[house - 1].pet"
                @update:modelValue="(value) => updateCell(house - 1, 'pet', value)"
                :options="puzzleStore.petOptions"
                placeholder="Animal"
                class="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
      <!-- Progress Bar -->
      <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
        <span class="font-medium">Progresso: {{ puzzleStore.completionPercentage }}%</span>
        <span class="font-medium">{{ puzzleStore.filledCells }}/25 células</span>
      </div>
      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 shadow-inner">
        <div
          class="bg-gradient-to-r from-purple-500 to-purple-600 h-1.5 rounded-full transition-all duration-700 ease-out shadow-sm"
          :style="{ width: `${puzzleStore.completionPercentage}%` }"
        ></div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-4 flex justify-center gap-3">
        <button
          @click="resetGame"
          class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-md transform hover:-translate-y-1 transition-all duration-200 text-sm"
        >
          🔄 Reiniciar Jogo
        </button>
      </div>

      <!-- Visual Helper for Position -->
      <div class="mt-3 text-center">
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-1.5 font-medium">
          ← Esquerda | Centro | Direita →
        </p>
        <div class="flex justify-center space-x-1">
          <div
            class="w-3 h-2 bg-gradient-to-r from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700 rounded shadow-sm"
          ></div>
          <div
            class="w-3 h-2 bg-gradient-to-r from-purple-300 to-purple-400 dark:from-purple-700 dark:to-purple-600 rounded shadow-sm"
          ></div>
          <div
            class="w-3 h-2 bg-gradient-to-r from-purple-400 to-purple-500 dark:from-purple-600 dark:to-purple-500 rounded shadow-sm"
          ></div>
          <div
            class="w-3 h-2 bg-gradient-to-r from-purple-300 to-purple-400 dark:from-purple-700 dark:to-purple-600 rounded shadow-sm"
          ></div>
          <div
            class="w-3 h-2 bg-gradient-to-r from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700 rounded shadow-sm"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PuzzleSelect from './ui/PuzzleSelect.vue'
import { usePuzzleStore } from '../stores/puzzle'
import { clearGameData } from '../utils/storage'

const puzzleStore = usePuzzleStore()

const updateCell = (houseIndex, category, value) => {
  puzzleStore.updateCell(houseIndex, category, value)
}

const resetGame = () => {
  if (
    confirm(
      '🔄 Tem certeza que deseja reiniciar completamente? O progresso do jogo será perdido, mas suas configurações (como tema) serão mantidas.',
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
</script>

<style scoped>
/* Scroll customizado para o grid */
.overflow-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.overflow-auto::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 6px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.7);
}

/* Dark mode scroll */
.dark .overflow-auto {
  scrollbar-color: rgba(107, 114, 128, 0.5) transparent;
}

.dark .overflow-auto::-webkit-scrollbar-thumb {
  background-color: rgba(107, 114, 128, 0.5);
}

.dark .overflow-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 0.7);
}
</style>
