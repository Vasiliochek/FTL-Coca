<template>
  <div @mouseleave="isOpen = false" class="relative inline-block text-left">
    <button 
      @click="toggle" 
      :style="{ width: width}"
      :class="['flex items-center gap-x-[3px] px-[20px] py-[16px] rounded-[50px] border border-[#D4D2E3] hover:bg-[#5D5A88] text-left', 
        isPlaceholder ? 'text-[#ADABC3]' : 'text-[#5D5A88]'
      ]">
      <img :src="icon" alt="" class="h-[28px] ml-auto">
    </button>

    <ul
      v-if="isOpen"
      class="absolute w-[30px] flex flex-col items-center bg-white border border-gray-300 shadow-lg z-10 rounded-[20px] overflow-auto"
      :style="{width: width}"
    >
      <li
        v-for="item in items"
        :key="item.value"
        @click="select(item)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        <img :src="item.value" alt="">
      </li>
    </ul>
  </div>
</template>

<script setup>

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  icon:{
    type: String,
    default: ''
  },
  width:{
    type: String,
    default: '180px'
  },
  height:{
    type: String,
    default: '63px'
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