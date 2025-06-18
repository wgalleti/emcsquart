<template>
  <div class="relative h-full">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full h-full px-3 py-2 text-sm font-medium bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-200"
      :class="{
        'text-gray-400 dark:text-gray-500': !modelValue,
        'bg-purple-50 dark:bg-purple-900/30 border-purple-300 dark:border-purple-600': modelValue,
      }"
    >
      <option value="" class="text-gray-400 dark:text-gray-500">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        class="text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700"
      >
        {{ option }}
      </option>
    </select>

    <!-- Custom arrow -->
    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Selecione...',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
/* Remove default select appearance */
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/* Focus styles */
select:focus {
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
}

/* Hover animation */
select {
  transition: all 0.2s ease;
}

select:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Dark mode hover */
.dark select:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>
