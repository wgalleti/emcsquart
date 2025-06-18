<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg border border-purple-200 dark:border-purple-700 bg-white dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
    :title="isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro'"
  >
    <svg v-if="isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const isDark = ref(false)

const applyTheme = (dark) => {
  const html = document.documentElement
  if (dark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
  console.log('Theme applied:', dark ? 'dark' : 'light', 'Classes:', html.className)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  console.log('Theme toggled to:', isDark.value ? 'dark' : 'light')
}

onMounted(async () => {
  // Aguarda o próximo tick para garantir que o DOM está pronto
  await nextTick()

  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = prefersDark
  }

  applyTheme(isDark.value)
  console.log(
    'Theme initialized:',
    isDark.value ? 'dark' : 'light',
    'from:',
    savedTheme ? 'localStorage' : 'system preference',
  )
})
</script>
