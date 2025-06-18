import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useStorage } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  // Estado persistente no localStorage
  const savedTheme = useStorage<'light' | 'dark' | 'system'>('app-theme', 'system')

  // Estado reativo atual
  const currentTheme = ref<'light' | 'dark'>('light')

  // Detectar preferência do sistema
  const systemPrefersDark = ref(false)

  // Computed para determinar se está no modo escuro
  const isDark = computed(() => currentTheme.value === 'dark')

  // Computed para o tema efetivo baseado na configuração
  const effectiveTheme = computed(() => {
    if (savedTheme.value === 'system') {
      return systemPrefersDark.value ? 'dark' : 'light'
    }
    return savedTheme.value
  })

  // Função para aplicar o tema ao DOM
  function applyTheme(theme: 'light' | 'dark') {
    const html = document.documentElement

    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }

    // Atualizar meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#1f2937' : '#7c3aed')
    }

    currentTheme.value = theme
    console.log(`[Theme] Applied: ${theme}`)
  }

  // Função para detectar preferência do sistema
  function detectSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    systemPrefersDark.value = mediaQuery.matches

    // Escutar mudanças na preferência do sistema
    mediaQuery.addEventListener('change', (e) => {
      systemPrefersDark.value = e.matches
      console.log(`[Theme] System preference changed to: ${e.matches ? 'dark' : 'light'}`)
    })
  }

  // Função para alternar o tema
  function toggleTheme() {
    if (savedTheme.value === 'light') {
      setTheme('dark')
    } else if (savedTheme.value === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  // Função para definir um tema específico
  function setTheme(theme: 'light' | 'dark' | 'system') {
    savedTheme.value = theme
    console.log(`[Theme] Theme set to: ${theme}`)
  }

  // Função de inicialização
  function initializeTheme() {
    // Detectar preferência do sistema primeiro
    detectSystemTheme()

    // Aplicar o tema efetivo
    applyTheme(effectiveTheme.value)

    console.log(
      `[Theme] Initialized with: ${savedTheme.value} (effective: ${effectiveTheme.value})`,
    )
  }

  // Watcher para aplicar mudanças no tema efetivo
  watch(
    effectiveTheme,
    (newTheme) => {
      applyTheme(newTheme)
    },
    { immediate: false },
  )

  // Watcher para mudanças na preferência do sistema (apenas quando tema é 'system')
  watch(systemPrefersDark, () => {
    if (savedTheme.value === 'system') {
      applyTheme(effectiveTheme.value)
    }
  })

  return {
    // State
    savedTheme,
    currentTheme,
    systemPrefersDark,

    // Computed
    isDark,
    effectiveTheme,

    // Actions
    toggleTheme,
    setTheme,
    initializeTheme,
    applyTheme,
  }
})
