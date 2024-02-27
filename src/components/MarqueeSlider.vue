<template>
  <Vue3Marquee :duration="50">
    <ul v-for="(slider, index) in sliderData" :key="index" class="slider-style" :class="props.background">
      <li><a :href="slider.link" target="_blank">{{ slider.title }}</a></li>
    </ul>
  </Vue3Marquee>
</template>

<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';
import 'vue3-marquee/dist/style.css';

// Import type interface
import type { SliderLink } from '@/types';
const props = defineProps(['background']);

// 
const sliderData: SliderLink[] = [
  {
    title: 'zaterdag 6 mei infodag op alle campussen van 10u-13u',
    link: 'https://www.vives.be/nl/studeren/infodag',
  },
  {
    title: 'zaterdag 24 juni infodag op alle campussen van 10u-16u',
    link: 'https://www.vives.be/nl/studeren/infodagen',
  },
  {
    title: 'vrijdag 1 september infodag op alle campussen van 16u-20u',
    link: 'https://www.vives.be/nl/studeren/infodagen',
  },
  {
    title: 'maandag 11 september infodag op alle campussen van 18u-20u',
    link: 'https://www.vives.be/nl/studeren/infodagen',
  },
  {
    title: 'woensdag 26 april openlesdag op alle campussen 14u-17u',
    link: 'https://www.vives.be/nl/over-vives/kalender/openlesdag-alle-campussen',
  },
  {
    title: 'donderdag 20 april infoavond voor ouders op campus Brugge Xaverianenstraat en campus Kortrijk om 19u',
    link: 'https://www.vives.be/nl/ouders/infoavond',
  },
];

</script>
<style lang="scss">
.slider-style {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  background-color: $theme-black;
  padding: 1rem;
  border: none;

  li {
    list-style-type: disc;
    color: $theme-beige;

    a {
      color: $theme-beige;
      padding-left: 1rem;
      text-shadow: $text-glow-beige;
    }
  }
}

.bg-color {
  background-color: $theme-beige;
  border-top: 1px solid $theme-black;
  border-bottom: 1px solid $theme-black;

  li {
    color: $theme-black;

    a {
      color: $theme-black;
      text-shadow: $text-glow-dark;
    }
  }
}
</style>