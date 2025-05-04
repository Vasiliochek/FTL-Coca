<template>
  <div @mouseleave="isOpen = false" class="relative inline-block text-left">
    <button 
      @click="toggle" 
      :style="{ width: width}"
      :class="['flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[50px] border border-[#ADABC3] hover:bg-gray-300 text-left', 
        isPlaceholder ? 'text-[#ADABC3]' : 'text-[#5D5A88]'
      ]">
      <img :src="iconStart" alt="">
      {{ selectedLabel }}
      <img :src="iconEnd" alt="" class="h-[16px] ml-auto">
    </button>

    <ul
      v-if="isOpen"
      class="absolute w-48 bg-white border border-gray-300 shadow-lg z-10 rounded-[20px] overflow-auto"
      :style="{width: width}"
    >
      <li
        v-for="item in items"
        :key="item.value"
        @click="select(item)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  iconStart:{
    type: String,
    default: ''
  },
  iconEnd:{
    type: String,
    default: ''
  },
  width:{
    type: String,
    default: '180px'
  }
})

const isPlaceholder = computed(() => !selected.value)

const isOpen = ref(false)
const selected = ref(null)

const selectedLabel = computed(() =>
  selected.value?.label || props.placeholder
)

function toggle() {
  isOpen.value = !isOpen.value
}

function select(item) {
  selected.value = item
  isOpen.value = false
}
</script>