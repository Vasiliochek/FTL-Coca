<template>
  <Header />
  <main>
    <section>
      <MainSearch class="mx-auto my-[55px]"/>
    </section>
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MainSearch from './components/MainSearch.vue'

</script>
