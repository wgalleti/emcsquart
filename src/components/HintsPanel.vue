<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-5 h-full flex flex-col"
  >
    <h2
      class="text-base font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-3 flex-shrink-0"
    >
      💡 Dicas do Enigma
      <span
        class="text-xs text-gray-500 dark:text-gray-400 font-normal bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
      >
        {{ puzzleStore.resolvedHintsCount }}/15
      </span>
    </h2>

    <div class="flex-1 overflow-y-auto space-y-1.5 pr-2">
      <div
        v-for="(hint, index) in puzzleStore.allHints"
        :key="index"
        class="flex items-start gap-2.5 py-1.5 px-2.5 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50"
        :class="
          hint.isResolved
            ? 'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50'
            : 'bg-gray-50/50 dark:bg-gray-700/30'
        "
      >
        <!-- Checkbox (readonly) -->
        <div class="flex-shrink-0 mt-0.5">
          <div
            class="w-3.5 h-3.5 rounded-md border-2 flex items-center justify-center transition-all duration-200"
            :class="
              hint.isResolved
                ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-purple-300 dark:hover:border-purple-500'
            "
          >
            <svg v-if="hint.isResolved" class="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- Texto da dica -->
        <div class="flex-1 min-w-0">
          <p
            class="text-xs leading-snug transition-all duration-300"
            :class="
              hint.isResolved
                ? 'text-emerald-800 dark:text-emerald-200 line-through font-medium opacity-75'
                : 'text-gray-700 dark:text-gray-300'
            "
          >
            <span class="font-bold text-purple-600 dark:text-purple-400 mr-1"
              >{{ index + 1 }}.</span
            >
            {{ hint.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
      <div class="flex items-center justify-between text-xs mb-2">
        <span class="text-gray-600 dark:text-gray-400 font-medium">
          {{ puzzleStore.resolvedHintsCount }}/15 resolvidas
        </span>
        <div class="flex items-center gap-1.5">
          <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
          <span class="text-emerald-600 dark:text-emerald-400 font-medium">Completas</span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 shadow-inner">
        <div
          class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-1.5 rounded-full transition-all duration-700 ease-out shadow-sm"
          :style="{ width: `${(puzzleStore.resolvedHintsCount / 15) * 100}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePuzzleStore } from '../stores/puzzle'

const puzzleStore = usePuzzleStore()
</script>

<style scoped>
/* Scroll customizado */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 6px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.7);
}

/* Dark mode scroll */
.dark .overflow-y-auto {
  scrollbar-color: rgba(107, 114, 128, 0.5) transparent;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(107, 114, 128, 0.5);
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 0.7);
}
</style>
