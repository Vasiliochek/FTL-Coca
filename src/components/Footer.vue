<template>
  <footer class="footer py-[80px]">
    <div class="footer-container container mx-auto flex gap-x-[240px]">
      <div class="footer__logo-container flex flex-col gap-y-[26px]">
        <a href="/">
          <img class="logo-img" src="../assets/logo.png" alt="Логотип">
        </a>
        <a class="flex gap-x-[10px] items-start mb-[77px] transition-all ease-in-out" href="https://www.google.com/maps?q=41.723509,44.745219" target="_blank">
          <img src="../assets/google-location.svg" alt="Локация">
          <span class="adress-text max-w-[210px]">{{ t('adress') }}</span>
        </a>
        <nav aria-label="Social media">
          <ul class="flex items-center gap-x-[16px]">
            <li>
              <a  href="https://www.facebook.com/" target="_blank">
                <img class="py-[9px] px-[13px] rounded-lg bg-[#333536] transition-all ease-in-out hover:bg-[#a3a6a8] active:bg-[#4d5153]" src="../assets/Facebook.svg" alt="Facebook">
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <img class="py-[9px] px-[10px] rounded-lg bg-[#333536] transition-all ease-in-out hover:bg-[#a3a6a8] active:bg-[#4d5153]" src="../assets/LinkedIn.svg" alt="LinkedIn">
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img class="py-[11px] px-[10px] rounded-lg bg-[#333536] transition-all ease-in-out hover:bg-[#a3a6a8] active:bg-[#4d5153]" src="../assets/YouTube.svg" alt="Youtube">
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav aria-label="About Company" class="footer__nav">
        <h3 class="text-white font-bold mb-[20px]">{{ t('aboutCompany') }}</h3>
        <ul class="nav__list flex flex-col gap-y-[10px]">
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('aboutCompany1') }}</a>
          </li>
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('aboutCompany2') }}</a>
          </li>
        </ul>
      </nav>
      <nav aria-label="About Platform" class="footer__nav">
        <h3 class="text-white font-bold mb-[20px]">{{ t('aboutPlatform') }}</h3>
        <ul class="nav__list flex flex-col gap-y-[10px]">
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('aboutPlatform1') }}</a>
          </li>
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('aboutPlatform2') }}</a>
          </li>
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('aboutPlatform3') }}</a>
          </li>
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('aboutPlatform4') }}</a>
          </li>
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('aboutPlatform5') }}</a>
          </li>
        </ul>
      </nav>
      <nav aria-label="Contact Us" class="footer__nav">
        <h3 class="text-white font-bold mb-[20px]">{{ t('contactUs') }}</h3>
        <ul class="nav__list flex flex-col gap-y-[10px]">
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('contactUs1') }}</a>
          </li>
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">FAQ</a>
          </li>
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('contactUs3') }}</a>
          </li>
          <li class="nav__item">
            <a class="text-[#9795B5] text-[18px] transition-all ease-in-out hover:underline" href="#">{{ t('contactUs4') }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
  <small class="block bg-[#232425]">
    <div class="container mx-auto pt-[47px] ">
      <h4 class="text-center text-white text-3xl font-bold mb-[45px]">{{ t('downloadApp') }}</h4>
      <div class="flex gap-x-[20px] justify-center pb-[34px] border-b-[#333536] border-b-[1px]">
        <button class="download-btn transition-all ease-in-out cursor-pointer">
          <a href="https://www.apple.com/app-store/" target="_blank"><img src="../assets/download_apple.png" alt=""></a>
        </button>
        <button class="download-btn transition-all ease-in-out cursor-pointer">
          <a href="https://play.google.com/store/games?pli=1" target="_blank"><img src="../assets/download_android.png" alt=""></a>
        </button>
      </div>
      <nav class="pt-[30px] mb-[20px]" aria-label="Terms & Policies">
        <ul class="flex justify-center divide-x divide-[#5D5A88]">
          <li>
            <a class="text-[#5D5A88] transition-colors ease-in-out hover:text-[#9795B5] hover:underline px-[6px]" href="#">{{ t('footerTerms1') }}</a>
          </li>
          <li>
            <a class="text-[#5D5A88] transition-colors ease-in-out hover:text-[#9795B5] hover:underline px-[6px]" href="#">{{ t('footerTerms2') }}</a>
          </li>
          <li>
            <a class="text-[#5D5A88] transition-colors ease-in-out hover:text-[#9795B5] hover:underline px-[6px]" href="#">{{ t('footerTerms3') }}</a>
          </li>
          <li>
            <a class="text-[#5D5A88] transition-colors ease-in-out hover:text-[#9795B5] hover:underline px-[6px]" href="#">{{ t('footerTerms4') }}</a>
          </li>
        </ul>
      </nav>
      <span class="text-white text-lg text-center block pb-[20px] cursor-default">{{ t('footerCopyright') }}</span>
    </div>
  </small>
</template>

<script lang="ts" setup>
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<style scoped>
h3 {
  font-size: 20px;
  
}

.footer {
  background-color: #282A2B;
}

.logo-img {
  filter: invert(100%) brightness(200%);
}

.adress-text {
  color: #9795B5;
  font-size: 18px;
}

.adress-text:hover {
  text-decoration: underline;
}

.adress-text:active {
  color: #c0bee2;
}

.download-btn:hover {
  border-radius: 12px;
  box-shadow: #c0bee2 0px 0px 30px;
}
</style>