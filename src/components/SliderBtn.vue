<template>
  <div
    class="h-[70px] bg-gray-200 rounded-full flex items-center px-1 relative cursor-pointer select-none border-2 border-[#ADABC3]"
    :class="locale === 'en' ? 'w-[400px]' : 'w-[500px]'"
    @click="toggle"
  >
    <!-- Индикатор -->
    <div
      class="absolute top-1 left-1 h-[58px] bg-[#5D5A88] rounded-full shadow transition-all duration-300"
      :class="[{ 'translate-x-[237px]': internalValue === 1 && locale === 'ru', 'translate-x-[187px]': internalValue === 1 }, locale === 'en' ? 'w-[200px]' : 'w-[250px]' ]"
    ></div>

    <!-- Текст -->
    <div class="z-10 flex w-full justify-between text-sm font-medium text-[#5D5A88] px-5 pb-1">
      <span class="text-xl transition-colors ease-in-out" :class="{ 'text-white': internalValue === 0 }">{{ labels[0] }}</span>
      <span class="text-xl transition-colors ease-in-out pr-4" :class="{ 'text-white': internalValue === 1 }">{{ labels[1] }}</span>
    </div>
  </div>
</template>

<script setup>
import {  defineEmits, ref, watch } from 'vue'
import { useLocale } from '../composables/useLocale'

const { locale } = useLocale()

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  labels: {
    type: Array,
    default: () => ['Left', 'Right']
  }
})

const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  internalValue.value = val
})

function toggle() {
  internalValue.value = internalValue.value === 0 ? 1 : 0
  emit('update:modelValue', internalValue.value)
}
</script>