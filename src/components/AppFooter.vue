<template>
  <footer
    class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-purple-200/50 dark:border-purple-800/50 shadow-soft mt-auto"
  >
    <div class="max-w-4xl mx-auto px-6 py-8">
      <div class="flex flex-col items-center space-y-6">
        <!-- App Info -->
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 rounded-xl flex items-center justify-center shadow-purple overflow-hidden"
          >
            <img src="/logo.png" alt="Einstein Logo" class="w-8 h-8 object-contain" />
          </div>
          <div class="text-center sm:text-left">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">Enigma de Einstein</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Desafie sua mente com o quebra-cabeça que apenas 2% consegue resolver
            </p>
          </div>
        </div>

        <!-- Quick Features -->
        <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <span class="flex items-center gap-2">
            <span class="text-purple-500">🎯</span>
            15 dicas lógicas
          </span>
          <span class="flex items-center gap-2">
            <span class="text-purple-500">🏠</span>
            5 casas diferentes
          </span>
          <span class="flex items-center gap-2">
            <span class="text-purple-500">⏱️</span>
            Timer integrado
          </span>
          <span class="flex items-center gap-2">
            <span class="text-purple-500">🧠</span>
            Desafio para gênios
          </span>
        </div>

        <!-- Developer Info -->
        <div class="flex items-center space-x-4">
          <div
            class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 rounded-full flex items-center justify-center"
          >
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div class="text-center sm:text-left">
            <p class="text-sm font-medium text-gray-900 dark:text-white">
              Desenvolvido por
              <span class="font-bold text-purple-600 dark:text-purple-400"
                >William Gallëti Tech</span
              >
            </p>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Soluções em tecnologia e desenvolvimento web
            </p>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="https://wa.me/5565999448004"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-green-lg"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
            <span class="text-sm font-medium">WhatsApp</span>
            <span class="text-sm">+55 65 99944-8004</span>
          </a>

          <div class="flex items-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
            <span class="flex items-center gap-1">
              <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3z"
                />
              </svg>
              {{ new Date().getFullYear() }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Dados seguros
            </span>
            <span class="flex items-center gap-1">
              <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              Feito com carinho
            </span>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-3">
          <a
            href="https://github.com/wgalleti"
            class="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-xl flex items-center justify-center transition-colors group"
          >
            <svg
              class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/wgalleti/"
            class="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-xl flex items-center justify-center transition-colors group"
          >
            <svg
              class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>

        <!-- Copyright -->
        <div
          class="text-center pt-6 border-t border-purple-200/50 dark:border-purple-800/50 w-full"
        >
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-xs text-gray-500 dark:text-gray-400">
              © {{ new Date().getFullYear() }} William Gallëti Tech. Todos os direitos reservados.
            </p>
            <div class="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span class="flex items-center gap-1">
                <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                v1.0.0
              </span>
              <span>•</span>
              <span>Baseado no puzzle original de Einstein</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// AppFooter component - no props needed
</script>

<style scoped>
/* Smooth hover transitions */
a {
  transition: all 0.2s ease;
}

/* Pulse animation for status indicator */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
