<template>
  <header class="header py-[16px]">
    <div class="header-container container flex items-center mx-auto">
      <a href="/">
        <img src="../assets/logo.png" alt="Логотип" class="max-h-[30px]">
      </a>
      <nav class="header__nav ml-auto">
        <ul class="nav__list flex gap-2">
          <li class="nav__item">
            <button @click="scrollToAnchor('about')" type="button" class="header-btn">
              {{ t('about') }}
            </button>
          </li>
          <li class="nav__item">
            <button class="header-btn w-[70px] flex items-center justify-center" @click="switchLocale">
              <img :src="locale === 'en' ? enFlag : ruFlag" alt="">
            </button>
          </li>
          <li class="nav__item">
            <button @click="loginModal.showModal"  class="header-btn flex items-center justify-center gap-x-[8px] h-[63px]">
              {{ t('signIn') }}
              <img src="../assets/none-user.png" alt="">
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <dialog @click="onBackdropClick" ref="loginModal" class="backdrop:bg-gray-600 backdrop:opacity-60">
      <div class="fixed top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <LoginModal @click.stop/>
        <button
          @click="loginModal.close()"
          class="absolute top-[12px] right-[12px] cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
          aria-label="Close modal"
        >
          <img :src="xMark" alt="close" class="w-6 h-6" />
        </button>
      </div>
    </dialog>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LangDropdown from './LangDropdown.vue'
import LoginModal from './LoginModal.vue'
import xMark from '../assets/x-mark.png'
import { useLocale } from '../composables/useLocale'
import enFlag from '../assets/uk-flag.png'
import ruFlag from '../assets/rus-flag.png'

const { t, switchLocale, locale } = useLocale()

function scrollToAnchor(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const loginModal = ref(null)

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    event.target.close()
  }
}

</script>

<style scoped>
.header {
  border-bottom: 1px solid #F4F3FF;
}

.header-btn {
  color: #5D5A88;
  padding: 19px 16px;
  border: 1px solid #D4D2E3;
  border-radius: 40px;
  cursor: pointer;
  transition: 200ms ease-in-out all;
}

.header-btn:hover {
  background-color: #5D5A88;
  color: #fff;
}

.header-btn:active {
  background-color: #D4D2E3;
}


</style>