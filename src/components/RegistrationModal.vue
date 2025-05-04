<template>
  <div class="modal-container w-[600px] bg-white rounded-[16px] p-[30px] pt-[27px]">
    <div>
      <h3 class="text-[#5D5A88] text-3xl font-bold text-center mb-[20px]">{{t('orderBtn')}}</h3>
      <form
      class="flex flex-col gap-y-[20px] w-full max-w-md bg-white rounded-lg mx-auto"
      @submit.prevent="submit"
    >

      <!-- Role -->
      <Dropdown
        :iconStart="roleIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('regRole')"
        width="450px"
        :items="[
          { label: 'driver', value: t('regRole1') },
          { label: 'Carrier', value: t('regRole2') },
        ]"
      />

      <!-- Email -->
        <input placeholder="Email" class="bg-[url('/src/assets/sms.png')] bg-no-repeat bg-[position:21px_50%] bg-[length:20px_20px] pl-12 placeholder:text-[#adabc3] w-[450px] flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[50px] border border-[#ADABC3] hover:bg-gray-300 text-left" v-model="form.email" type="email" />
      <!-- First Name -->
        <input placeholder="Name" v-model="form.firstName" type="text" class="bg-[url('/src/assets/profile.png')] bg-no-repeat bg-[position:21px_50%] bg-[length:20px_20px] pl-12 placeholder:text-[#adabc3] w-[450px] flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[50px] border border-[#ADABC3] hover:bg-gray-300 text-left" />
      <!-- Last Name -->
        <input placeholder="Last Name" v-model="form.lastName" type="text" class="bg-[url('/src/assets/profile.png')] bg-no-repeat bg-[position:21px_50%] bg-[length:20px_20px] pl-12 placeholder:text-[#adabc3] w-[450px] flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[50px] border border-[#ADABC3] hover:bg-gray-300 text-left" />
      <!-- Phone -->
        <input placeholder="phone" v-model="form.phone" type="tel" class="bg-[url('/src/assets/call.png')] bg-no-repeat bg-[position:21px_50%] bg-[length:20px_20px] pl-12 placeholder:text-[#adabc3] w-[450px] flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[50px] border border-[#ADABC3] hover:bg-gray-300 text-left" />
      <!-- Password -->
        <input placeholder="Password" v-model="form.password" type="password" class="bg-[url('/src/assets/key-square.png')] bg-no-repeat bg-[position:21px_50%] bg-[length:20px_20px] pl-12 placeholder:text-[#adabc3] w-[450px] flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[50px] border border-[#ADABC3] hover:bg-gray-300 text-left" />
      <!-- Confirm Password -->
        <input placeholder="Confirm Password" v-model="form.confirmPassword" type="password" class="bg-[url('/src/assets/key-square.png')] bg-no-repeat bg-[position:21px_50%] bg-[length:20px_20px] pl-12 placeholder:text-[#adabc3] w-[450px] flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[50px] border border-[#ADABC3] hover:bg-gray-300 text-left" />
      <!-- Terms -->
      <div class="pl-[10px] flex items-start">
        <input
          v-model="form.agree"
          type="checkbox"
          id="agree"
          class="mt-[6px] mr-2"
        />
        <label for="agree" class="text-sm text-[#adabc3] text-[16px]">
          I agree to the processing of personal data and have familiarized myself with <a href="/terms" class="text-[#5d5a88] text-[16px] underline">User Agreement</a>
        </label>
      </div>

      <button class="flex items-center justify-center gap-x-[5px] mt-[30px] text-white bg-[#5D5A88] h-[56px] mx-auto w-[450px] rounded-[15px] cursor-pointer hover:bg-[#938ACE] active:bg-[#5D5A88] transition-colors ease-in-out ">
          Next
      </button>
    </form>
    </div>
    
  </div>
</template>

<script setup>
import Dropdown from './Dropdown.vue'
import locationIcon from '../assets/location.svg'
import arrowDownIcon from '../assets/arrow-down.png'
import calendarIcon from '../assets/calendar-2.svg'
import truckIcon from '../assets/truck-icon.svg'
import box1Icon from '../assets/box-1-icon.svg'
import box2Icon from '../assets/box-2-icon.svg'
import roleIcon from '../assets/people.png'
import warningIcon from '../assets/warning-icon.svg'

import { reactive } from 'vue'


import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const form = reactive({
  role: '',
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agree: false
})

function submit() {
  console.log('Submitting:', form)
  // Тут можно добавить валидацию и отправку данных
}
</script>