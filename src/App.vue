<script setup>
import { usePuzzleStore } from './stores/puzzle'
import EinsteinGrid from './components/EinsteinGrid.vue'
import HintsPanel from './components/HintsPanel.vue'
import BriefingScreen from './components/BriefingScreen.vue'
import SuccessScreen from './components/SuccessScreen.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import AppFooter from './components/AppFooter.vue'

const puzzleStore = usePuzzleStore()
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-purple-50 via-purple-25 to-white dark:from-gray-900 dark:via-purple-950 dark:to-gray-950 text-gray-900 dark:text-gray-100 animate-fade-in flex flex-col"
  >
    <!-- Header - Only show when game is started -->
    <header
      v-if="puzzleStore.gameStarted"
      class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-purple-200/50 dark:border-purple-800/50 shadow-soft sticky top-0 z-50"
    >
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div
            class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 rounded-xl flex items-center justify-center shadow-purple animate-bounce-soft overflow-hidden"
          >
            <img src="/logo.png" alt="Einstein Logo" class="w-6 h-6 object-contain" />
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">Enigma de Einstein</h1>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{
                puzzleStore.gameStarted
                  ? `Jogador: ${puzzleStore.playerName}`
                  : 'Descubra quem tem o peixe!'
              }}
            </p>
          </div>
        </div>

        <!-- Stats - Only show when game started -->
        <div class="flex items-center gap-6 text-sm">
          <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span class="text-xs font-medium">Tempo:</span>
            <span class="font-mono font-bold text-purple-600 dark:text-purple-400">{{
              puzzleStore.formattedTime
            }}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span class="text-xs font-medium">Dicas:</span>
            <span class="font-bold text-emerald-600 dark:text-emerald-400"
              >{{ puzzleStore.resolvedHintsCount }}/15</span
            >
          </div>
          <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span class="text-xs font-medium">Erros:</span>
            <span class="font-bold text-red-600 dark:text-red-400">{{
              puzzleStore.errorCount
            }}</span>
          </div>

          <!-- Theme toggle -->
          <div class="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main :class="puzzleStore.gameStarted ? 'max-w-7xl mx-auto p-6 flex-1' : 'w-full flex-1'">
      <!-- Briefing Screen - Show when game not started -->
      <div v-if="!puzzleStore.gameStarted" class="flex-1 flex items-center justify-center p-6">
        <BriefingScreen />
      </div>

      <!-- Success Screen - Show when puzzle completed -->
      <div v-else-if="puzzleStore.isCompleted" class="flex-1 flex items-center justify-center">
        <SuccessScreen />
      </div>

      <!-- Game Screen - Show when game started but not completed -->
      <div v-else class="flex-1 flex flex-col lg:flex-row gap-6">
        <!-- Painel de dicas (30% do espaço) -->
        <div class="lg:w-[30%] h-80 lg:flex-1 animate-slide-in">
          <HintsPanel />
        </div>

        <!-- Grade do puzzle (70% do espaço) -->
        <div class="lg:w-[70%] flex-1 animate-fade-in" style="animation-delay: 0.1s">
          <EinsteinGrid />
        </div>
      </div>
    </main>

    <!-- Footer - Always visible -->
    <AppFooter />
  </div>
</template>

<style scoped>
/* Smooth layout transitions */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-slide-in {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.5s ease-out forwards;
}

.animate-bounce-soft {
  animation: bounceSoft 0.8s ease-out;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceSoft {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}
</style>
