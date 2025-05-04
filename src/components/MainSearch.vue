<template>
  <section class="search-container container">
    <form class="mx-auto relative w-[1195px] h-[70px]">
      <button type="button" @click="advancedModal.showModal" class="absolute top-[-30px] right-[30px] text-[#5D5A88] transition-colors ease-in-out hover:underline hover:text-[#ADABC3] active:text-[#5D5A88] cursor-pointer" for="#">{{ t('advancedSearch') }}</button>
      <input type="text" :placeholder=" t('search')" class="placeholder:text-[#ADABC3] mx-auto block w-[1195px] h-[70px] border border-[#ADABC3] pl-[20px] pb-1 rounded-[50px] focus:outline-none bg-[#FBFCFF]">
      <button class="bg-[#5D5A88] w-[74px] h-[56px] rounded-[50px] flex justify-center items-center absolute top-[7px] right-[7px] cursor-pointer hover:bg-[#938ece] active:bg-[#5D5A88] transition-colors ease-in-out">
        <img class="w-[18px] h-[18px]" src="../assets/search-main.svg" alt="Поиск">
    </button>
    </form>
    <dialog @click="onBackdropClick" ref="advancedModal" class="backdrop:bg-gray-600 backdrop:opacity-60">
      <div class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <AdvancedSearchModal @click.stop/>
        <button
          @click="advancedModal.close()"
          class="absolute top-[32px] right-[30px] cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
          aria-label="Close modal"
        >
          <img :src="xMark" alt="close" class="w-6 h-6" />
        </button>
      </div>
    </dialog>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AdvancedSearchModal from '../components/AdvancedSearchModal.vue'
import { useLocale } from '../composables/useLocale'
import xMark from '../assets/x-mark.png'

const { t } = useLocale()

const advancedModal = ref(null)

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    event.target.close()
  }
}
</script>

<style scoped>
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

</style>