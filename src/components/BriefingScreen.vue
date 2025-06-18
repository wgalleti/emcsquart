<template>
  <div class="max-w-4xl mx-auto">
    <!-- Theme Toggle - Fixed position -->
    <div class="fixed top-6 right-6 z-50">
      <ThemeToggle />
    </div>

    <div
      class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 text-center animate-fade-in"
    >
      <!-- Hero Section -->
      <div class="mb-8">
        <div
          class="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-purple animate-bounce-soft overflow-hidden"
        >
          <img src="/logo.png" alt="Einstein Logo" class="w-16 h-16 object-contain" />
        </div>
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Enigma de Einstein</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          O famoso quebra-cabeça lógico que desafia sua mente
        </p>
      </div>

      <!-- Description -->
      <div class="bg-purple-50 dark:bg-purple-950/30 rounded-2xl p-6 mb-8 text-left">
        <h2 class="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4 text-center">
          🎯 Sobre o Desafio
        </h2>
        <div class="space-y-4 text-gray-700 dark:text-gray-300">
          <p class="leading-relaxed">
            O <strong>Enigma de Einstein</strong> é um quebra-cabeça lógico atribuído ao famoso
            físico Albert Einstein. Diz-se que apenas
            <strong>2% da população mundial</strong> consegue resolvê-lo mentalmente.
          </p>
          <p class="leading-relaxed">
            Você precisa descobrir <strong>quem tem o peixe</strong> usando apenas as 15 dicas
            fornecidas. Há 5 casas, cada uma com uma cor diferente, habitada por pessoas de
            nacionalidades distintas, que bebem bebidas diferentes, fumam cigarros diferentes e
            criam animais diferentes.
          </p>
          <p class="leading-relaxed">
            Use a lógica dedutiva para preencher a grade e resolver o mistério. As dicas se
            resolverão automaticamente conforme você progride!
          </p>
        </div>
      </div>

      <!-- Fun Facts -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div
          class="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-5 border border-emerald-200 dark:border-emerald-800/50"
        >
          <div class="text-2xl mb-3">🎓</div>
          <h3 class="font-bold text-emerald-900 dark:text-emerald-100 mb-2">
            Curiosidade Histórica
          </h3>
          <p class="text-sm text-emerald-700 dark:text-emerald-300">
            Einstein criou este puzzle no início do século XX. Ele acreditava que apenas pessoas com
            QI acima de 160 conseguiriam resolvê-lo.
          </p>
        </div>

        <div
          class="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-5 border border-blue-200 dark:border-blue-800/50"
        >
          <div class="text-2xl mb-3">🧩</div>
          <h3 class="font-bold text-blue-900 dark:text-blue-100 mb-2">Estratégia</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">
            Comece com as dicas mais específicas, como "O norueguês vive na primeira casa" e
            trabalhe a partir daí.
          </p>
        </div>
      </div>

      <!-- Player Input -->
      <div class="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-8">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
          👤 Pronto para o desafio?
        </h3>

        <div class="max-w-md mx-auto">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Seu nome (opcional)
          </label>
          <input
            v-model="playerName"
            type="text"
            placeholder="Digite seu nome..."
            maxlength="30"
            class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 transition-all duration-200 text-center text-gray-900 dark:text-gray-100"
            @keyup.enter="startGame"
          />

          <!-- Easter egg hint for special name -->
          <div
            v-if="isSpecialName"
            class="mt-2 text-xs text-amber-600 dark:text-amber-400 animate-pulse"
          >
            ✨ Nome especial detectado! Opção secreta disponível...
          </div>
        </div>
      </div>

      <!-- Start Button -->
      <div class="space-y-4">
        <div class="flex flex-col items-center gap-4">
          <button
            @click="startGame"
            class="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-purple-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
          >
            🚀 Iniciar Desafio
          </button>

          <!-- Special button for William Gallëti -->
          <button
            v-if="isSpecialName"
            @click="startWithSolution"
            class="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-amber-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
          >
            🎯 Solucionar Automaticamente
          </button>
        </div>

        <div class="text-xs text-gray-500 dark:text-gray-400">
          Pressione Enter no campo do nome ou clique no botão para começar
        </div>
      </div>

      <!-- Tips -->
      <div class="mt-8 text-left">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
          💡 Dicas para Resolver
        </h3>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div
            class="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4 border border-amber-200 dark:border-amber-800/50"
          >
            <h4 class="font-semibold text-amber-900 dark:text-amber-100 mb-2">1. Organize-se</h4>
            <p class="text-amber-700 dark:text-amber-300">
              Use as casas de 1 a 5 da esquerda para a direita. Comece pelas dicas mais específicas.
            </p>
          </div>

          <div
            class="bg-rose-50 dark:bg-rose-950/30 rounded-lg p-4 border border-rose-200 dark:border-rose-800/50"
          >
            <h4 class="font-semibold text-rose-900 dark:text-rose-100 mb-2">
              2. Processo de Eliminação
            </h4>
            <p class="text-rose-700 dark:text-rose-300">
              Se algo não pode estar em um lugar, elimine a possibilidade e trabalhe com o que
              resta.
            </p>
          </div>

          <div
            class="bg-indigo-50 dark:bg-indigo-950/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800/50"
          >
            <h4 class="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
              3. Seja Paciente
            </h4>
            <p class="text-indigo-700 dark:text-indigo-300">
              O puzzle pode levar de 15 a 60 minutos. Não desista na primeira dificuldade!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePuzzleStore } from '../stores/puzzle'
import ThemeToggle from './ThemeToggle.vue'

const puzzleStore = usePuzzleStore()
const playerName = ref('')

const isSpecialName = computed(() => {
  return playerName.value.toLowerCase().trim() === 'william gallëti'
})

const startGame = () => {
  const name = playerName.value.trim() || 'Jogador'
  puzzleStore.startGame(name)
}

const startWithSolution = () => {
  const name = playerName.value.trim() || 'William Gallëti'
  puzzleStore.startGameWithSolution(name)
}
</script>

<style scoped>
/* Animations */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-bounce-soft {
  animation: bounceSoft 1s ease-out;
}

@keyframes fadeIn {
  to {
    opacity: 1;
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
    transform: translate3d(0, -12px, 0);
  }
  70% {
    transform: translate3d(0, -6px, 0);
  }
  90% {
    transform: translate3d(0, -3px, 0);
  }
}

/* Input focus glow */
input:focus {
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
}

.dark input:focus {
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.2);
}
</style>
