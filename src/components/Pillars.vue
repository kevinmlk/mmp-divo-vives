<template>
  <div class="container-fixed">
    <h2>Grafisch en visueel vormgeven van<br>online inhoud van website,<br>platformen en apps</h2>
    <div id="pillars-section">
      <div v-for="pillar, index in pillars" :key="index" class="pillar-container">
        <img :src="pillar.media" :alt="pillar.title">
        <h3>{{ pillar.title }}</h3>
        <p>{{ pillar.description }}</p>
      </div>
    </div>
    <router-link :to="{ name: 'curriculum' }" class="button-beige">curriculum</router-link>
  </div>
</template>
<script setup lang="ts">
import type { Pillar } from '@/types';
import pillarGraphic from '@/assets/images/pillar-graphic.jpg';
import pillarWeb from '@/assets/images/pillar-web.jpg';
import pillarWork from '@/assets/images/pillar-work.jpg';

const pillars: Pillar[] = [
  {
    media: pillarGraphic, title: 'Grafische vormgeving',
    description: 'Je leert werken met de nieuwste en belangrijkste Adobe designsoftware en -tools.',
  },
  {
    media: pillarWeb, title: 'Web development',
    description: 'Naast je grafische skills en je creativiteit sta je ook sterk op vlak van hedendaagse webtechnologieën.',
  },
  {
    media: pillarWork, title: 'Persoonlijke ontwikkeling',
    description: 'Je krijgt veel praktijkervaring vooraleer je als een professional in het werkveld stapt.',
  },

];
</script>
<style lang="scss" scoped>
.container-fixed {
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;

  #pillars-section {
    display: flex;
    justify-content: center;
    gap: 3rem;

    .pillar-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid $theme-black;
      border-radius: 5px;
      width: 270px;

      img {
        width: 270px;
        height: 225px;
        border: 1px solid $theme-black;
        border-radius: 5px;
      }
    }
  }
}
</style>