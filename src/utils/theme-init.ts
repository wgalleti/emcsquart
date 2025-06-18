/**
 * Utilitário para inicializar o tema o mais cedo possível
 * Para evitar flash de conteúdo sem estilo (FOUC)
 */

export function initThemeEarly() {
  // Função para aplicar tema diretamente ao DOM
  const applyTheme = (theme: 'light' | 'dark') => {
    const html = document.documentElement

    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }

    // Atualizar meta theme-color se existir
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#1f2937' : '#7c3aed')
    }
  }

  // Detectar preferência do sistema
  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // Obter tema salvo ou usar sistema como fallback
  const getEffectiveTheme = (): 'light' | 'dark' => {
    try {
      const saved = localStorage.getItem('app-theme')

      if (saved === 'light' || saved === 'dark') {
        return saved
      }

      if (saved === 'system' || !saved) {
        return getSystemTheme()
      }

      return getSystemTheme()
    } catch (error) {
      console.warn('[Theme] Error accessing localStorage:', error)
      return getSystemTheme()
    }
  }

  // Aplicar tema imediatamente
  const theme = getEffectiveTheme()
  applyTheme(theme)

  console.log(`[Theme] Early initialization: ${theme}`)
}

// Auto-executar se o documento já estiver carregado
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeEarly)
  } else {
    initThemeEarly()
  }
}
