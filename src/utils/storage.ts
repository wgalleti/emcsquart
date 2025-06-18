/**
 * Utilitários para gerenciar localStorage de forma seletiva
 */

// Chaves específicas do jogo que devem ser limpas no reset
const GAME_STORAGE_KEYS = [
  'einstein-grid',
  'einstein-hints',
  'einstein-start-time',
  'einstein-errors',
  'einstein-completed',
  'einstein-game-started',
] as const

// Chaves que devem ser preservadas no reset (configurações do usuário)
const PRESERVED_STORAGE_KEYS = ['app-theme'] as const

/**
 * Limpa apenas os dados do jogo, preservando configurações do usuário
 */
export function clearGameData() {
  try {
    GAME_STORAGE_KEYS.forEach((key) => {
      localStorage.removeItem(key)
      console.log(`[Storage] Removed game key: ${key}`)
    })

    console.log(`[Storage] Game data cleared, preserved keys: ${PRESERVED_STORAGE_KEYS.join(', ')}`)
  } catch (error) {
    console.error('[Storage] Error clearing game data:', error)
    // Fallback: limpar tudo se houver erro
    console.warn('[Storage] Fallback: clearing all localStorage')
    localStorage.clear()
  }
}

/**
 * Limpa todo o localStorage (incluindo configurações)
 * Use apenas quando necessário
 */
export function clearAllData() {
  try {
    localStorage.clear()
    console.log('[Storage] All localStorage cleared')
  } catch (error) {
    console.error('[Storage] Error clearing all data:', error)
  }
}

/**
 * Verifica se uma chave é preservada no reset
 */
export function isPreservedKey(key: string): boolean {
  return PRESERVED_STORAGE_KEYS.includes(key as any)
}

/**
 * Obtém todas as chaves preservadas
 */
export function getPreservedKeys(): readonly string[] {
  return PRESERVED_STORAGE_KEYS
}

/**
 * Obtém todas as chaves do jogo
 */
export function getGameKeys(): readonly string[] {
  return GAME_STORAGE_KEYS
}
