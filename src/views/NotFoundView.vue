<template>
  <main>
    <!-- Intro-text -->
    <div class="intro-text">
      <h1>404</h1>
      <p>
        Oeps, de pagina die je probeert te zoeken bestaat niet of is verplaats!
      </p>
      <router-link :to="{ name: 'home' }" class="button-beige">Terug naar home</router-link>
    </div>
  </main>
  <!-- Marquee slider -->
  <MarqueeSlider :background="'bg-color'" />
</template>
<script setup lang="ts">
// Import Marquee slider
import MarqueeSlider from '@/components/MarqueeSlider.vue';
</script>
<style lang="scss"></style>