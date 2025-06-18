<template>
  <button :class="buttonClasses" :disabled="disabled" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'BaseButton',
})

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) =>
      ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'].includes(value),
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'sm', 'lg', 'icon'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
})

const buttonClasses = computed(() => {
  const baseClasses =
    'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md hover:-translate-y-0.5'

  // Variant classes
  const variantClasses = {
    default:
      'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 active:from-purple-800 active:to-purple-900',
    destructive:
      'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 active:from-red-800 active:to-red-900',
    outline:
      'border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-400 dark:hover:border-purple-500',
    secondary:
      'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-gray-100 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500',
    ghost:
      'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100',
    link: 'text-purple-600 dark:text-purple-400 underline-offset-4 hover:underline hover:text-purple-700 dark:hover:text-purple-300',
  }

  // Size classes
  const sizeClasses = {
    default: 'h-10 px-6 py-2',
    sm: 'h-8 rounded-lg px-4 text-xs',
    lg: 'h-12 rounded-xl px-8 text-base',
    icon: 'h-10 w-10',
  }

  return [
    baseClasses,
    variantClasses[props.variant] || variantClasses.default,
    sizeClasses[props.size] || sizeClasses.default,
    props.className,
  ]
    .filter(Boolean)
    .join(' ')
})
</script>

<style scoped>
/* Additional button effects */
button {
  position: relative;
  overflow: hidden;
}

/* Ripple effect on click */
button:active {
  transform: translateY(0) scale(0.98);
}

/* Focus ring offset for dark mode */
.dark button:focus-visible {
  ring-offset-color: rgb(31 41 55);
}
</style>
