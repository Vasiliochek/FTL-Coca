<template>
  <div class="modal-container w-[471px] bg-white rounded-[16px] px-[40px] py-[24px]">
    <div>
      <h3 class="text-[#5D5A88] text-3xl font-bold text-center mb-[30px]">{{t('login')}}</h3>
      <form
        class="flex flex-col gap-y-[20px] w-full max-w-md bg-white rounded-lg mx-auto"
        @submit.prevent="submit"
        >
        <input placeholder="Email" class="bg-[url('/src/assets/sms.png')] bg-no-repeat bg-[position:21px_50%] bg-[length:20px_20px] pl-12 placeholder:text-[#adabc3] w-[391px] flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[15px] border border-[#ADABC3] hover:bg-gray-300 text-left" v-model="form.email" type="email" />
        <input placeholder="Password" v-model="form.password" type="password" class="bg-[url('/src/assets/key-square.png')] bg-no-repeat bg-[position:21px_50%] bg-[length:20px_20px] pl-12 placeholder:text-[#adabc3] w-[391px] flex items-center gap-x-[3px] bg-[#FBFCFF] px-[20px] py-[16px] rounded-[15px] border border-[#ADABC3] hover:bg-gray-300 text-left" />
        <button class="flex items-center justify-center gap-x-[5px] mt-[20px] text-white bg-[#5D5A88] h-[56px] mx-auto w-[391px] rounded-[15px] cursor-pointer hover:bg-[#938ACE] active:bg-[#5D5A88] transition-colors ease-in-out ">
          Next
        </button>
        <p class="text-lg text-[#5D5A88] text-center">
          {{t('loginText')}}
          <a class="text-[#7B61FF] underline" href="/">{{ t('loginTextReg') }}</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

<style>

</style>