<template>
  <section class="mb-[80px]">
    <GoogleMap />
  </section>
  <section id="about" class="about">
    <div class="container mx-auto pt-[35px] flex flex-col items-center">
      <h1 class="text-center text-[#5D5A88] text-5xl font-bold mb-[30px]">{{ $t('about') }}</h1>
      <SliderBtn class="mb-[100px]" v-model="selected" :labels="[t('aboutForCustomer'), t('aboutForCarrier')]" />
      <div class="flex gap-x-[50px] mb-[100px]">
        <p class="max-w-[500px] text-lg/10 line-h pt-[40px] block cursor-default">{{ t('aboutText') }}</p>
        <img class="w-[700px] h-[420px]" src="../assets/img-blank.png" alt="">
      </div>
    </div>
  </section>
  <section class="advantages">
    <div class="container mx-auto pt-[35px] flex flex-col items-center mb-[130px]">
      <h2 class="text-center text-[#5D5A88] text-5xl font-bold mb-[60px]">{{ t('advantages') }}</h2>
      <ul class="decoration-0 flex gap-x-[30px]">
        <li class="advantages__card flex flex-col gap-y-[30px] justify-center items-center border w-[385px]  border-[#D4D2E3] rounded-[35px] px-[24px] py-[30px]">
          <h3 class="text-[#5D5A88] text-2xl font-semibold">{{ t('advantagesCard1H') }}</h3>
          <img src="../assets/Снимок.PNG" alt="">
          <p class="text-[#5D5A88] text-center cursor-default">{{ t('advantagesCard1P') }}</p>
        </li>
        <li class="advantages__card flex flex-col gap-y-[30px] justify-center items-center border w-[385px]  border-[#D4D2E3] rounded-[35px] px-[24px] py-[30px]">
          <h3 class="text-[#5D5A88] text-2xl font-semibold text-center">{{ t('advantagesCard2H') }}</h3>
          <img src="../assets/truck.PNG" alt="">
          <p class="text-[#5D5A88] text-center cursor-default">{{ t('advantagesCard2P') }}</p>
        </li>
        <li class="advantages__card flex flex-col gap-y-[30px] justify-center items-center border w-[385px]  border-[#D4D2E3] rounded-[35px] px-[24px] py-[30px]">
          <h3 class="text-[#5D5A88] text-2xl font-semibold text-center">{{ t('advantagesCard3H') }}</h3>
          <img src="../assets/monitor.PNG" alt="">
          <p class="text-[#5D5A88] text-center cursor-default">{{ t('advantagesCard3P') }}</p>
        </li>
        <li class="advantages__card flex flex-col gap-y-[30px] justify-center items-center border w-[385px]  border-[#D4D2E3] rounded-[35px] px-[24px] py-[30px]">
          <h3 class="text-[#5D5A88] text-2xl font-semibold text-center">{{ t('advantagesCard4H') }}</h3>
          <img src="../assets/achive.PNG" alt="">
          <p class="text-[#5D5A88] text-center cursor-default">{{ t('advantagesCard4P') }}</p>
        </li>
      </ul>
    </div>
  </section>
  <section class="order flex">
    <div class="container flex flex-col mx-auto p-[44px] border border-[#D4D2E3] rounded-[35px] mb-[100px]">
      <h2 class="text-center text-[#5D5A88] text-5xl font-bold mb-[50px]">{{ t('orderH') }}</h2>
      <button @click="registrationModal.showModal" class="bg-[#5D5A88] w-[400px] h-[56px] rounded-[20px] text-white text-lg flex justify-center items-center mx-auto cursor-pointer hover:bg-[#938ece] active:bg-[#5D5A88] transition-colors ease-in-out">{{ t('orderBtn') }}</button>
    </div>
  </section>
  <dialog @click="onBackdropClick" ref="registrationModal" class="backdrop:bg-gray-600 backdrop:opacity-60">
      <div class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <RegistrationModal @click.stop/>
        <button
          @click="registrationModal.close()"
          class="absolute top-[15px] right-[15px] cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
          aria-label="Close modal"
        >
          <img :src="xMark" alt="close" class="w-6 h-6" />
        </button>
      </div>
    </dialog>
</template>

<script setup>
import GoogleMap from '../components/GoogleMap.vue'
import SliderBtn from '../components/SliderBtn.vue'
import RegistrationModal from '../components/RegistrationModal.vue'
import xMark from '../assets/x-mark.png'

import { ref } from 'vue'

import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const selected = ref(0)

const registrationModal = ref(null)

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    event.target.close()
  }
}
</script>

<style scoped>
</style>