<template>
  <div :class="cn('rounded-xl border bg-card text-card-foreground shadow', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils'

defineProps({
  className: {
    type: String,
    default: '',
  },
})
</script>
