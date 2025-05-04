<template>
  <div class="modal-container w-[1200px] bg-white rounded-[16px] p-[30px] pt-[27px]">
    <div class="pb-[30px] border-b-[#D4D2E3] border-b">
      <h3 class="text-[#5D5A88] text-xl font-semibold mb-[30px]">{{ t('advancedSearch') }}</h3>
      <div class="flex max-h-[58px] gap-x-[20px]">
        <Dropdown 
        :iconStart="locationIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnUploadLocation')"
        width="340px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="locationIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="340px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="calendarIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="340px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
      </div>
    </div>
    <div class="pt-[30px] pb-[30px] border-b-[#D4D2E3] border-b">
      <h3 class="text-[#5D5A88] text-xl font-semibold mb-[30px]">{{ t('vehicleRequirement') }}</h3>
      <div class="flex flex-wrap gap-x-[20px] gap-y-[30px]">
        <Dropdown 
        :iconStart="truckIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnUploadLocation')"
        width="340px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="box1Icon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="240px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="box2Icon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="240px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="documentIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="280px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="warningIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="240px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
      </div>
    </div>
    <div class="pt-[30px] pb-[30px] border-b-[#D4D2E3] border-b">
      <h3 class="text-[#5D5A88] text-xl font-semibold mb-[30px]">{{ t('cargoInformation') }}</h3>
      <div class="flex flex-wrap gap-x-[20px] gap-y-[30px]">
        <Dropdown 
        :iconStart="locationIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnUploadLocation')"
        width="340px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="locationIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="240px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="locationIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="240px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="locationIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="280px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
        <Dropdown 
        :iconStart="locationIcon"
        :iconEnd="arrowDownIcon"
        :placeholder="t('advancedSearchModalDropdowvnDropOffLocation')"
        width="240px"
        :items="[
          { label:  t('town1'), value: t('town1') },
          { label: t('town2'), value: t('town2') },
          { label: t('town3'), value: t('town3') }
        ]"/>
      </div>
    </div>
    <button class="flex items-center justify-center gap-x-[5px] mt-[30px] text-white bg-[#5D5A88] h-[56px] w-full rounded-[50px] cursor-pointer hover:bg-[#938ACE] active:bg-[#5D5A88] transition-colors ease-in-out ">
      <img class="w-[18px] h-[18px]" src="../assets/search-main.svg" alt="">
      {{ t('advancedSearchBtn') }}
    </button>
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
import documentIcon from '../assets/document-text.svg'
import warningIcon from '../assets/warning-icon.svg'


import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>