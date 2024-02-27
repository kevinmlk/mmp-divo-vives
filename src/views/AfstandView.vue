<template>
  <main>
    <!-- Intro-text -->
    <div class="intro-text">
      <h1>Afstandsonderwijs</h1>
      <p>
        Communicatiemedewerker? Je grafische skills verbeteren? Leer na de werkuren online content maken, werken met
        grafische programma’s en websites bouwen.
      </p>
    </div>
    <!-- Main fields section -->
    <div id="fields-section" class="container-fixed">
      <h2>Grafisch en visueel vormgeven van online inhoud van websites, platformen en apps</h2>
      <template v-for="content, index in mediaTextSectionOne" :key="index">
        <MediaText :mediaText="content" />
      </template>
    </div>
    <!-- Curriculum section -->
    <div class="curriculum-section container-fixed">
      <h2>Opleidingsprogramma</h2>
      <h3>Afstandonderwijs</h3>
      <Curriculum />
    </div>
    <!-- Main fields section -->
    <div id="fields-section" class="container-fixed">
      <template v-for="content, index in mediaTextSectionTwo" :key="index">
        <MediaText :mediaText="content" />
      </template>
    </div>
    <!-- Curriculum section -->
    <div class="curriculum-section container-fixed">
      <h2>Opleidingsprogramma</h2>
      <h3>Micro degree</h3>
      <Curriculum />
    </div>
    <!-- AbstractMedia section -->
    <template v-for="abstractContent, index in integratieContent" :key="index">
      <AbstractMedia :abstractData="abstractContent" />
    </template>
    <!-- Infoday section -->
    <div class="infoday-section">
      <Infoday />
    </div>
  </main>
  <!-- Marquee slider -->
  <MarqueeSlider :background="'bg-color'" />
</template>
<script setup lang="ts">
// Import Marquee slider
import MarqueeSlider from '@/components/MarqueeSlider.vue';

// Import comps
import MediaText from '@/components/MediaText.vue';
import AbstractMedia from '@/components/AbstractMediaText.vue';
import Infoday from '@/components/Infoday.vue';
import Curriculum from '@/components/Curriculum.vue';

// Import type interface
import type { MediaTextSection } from '@/types';
import type { AbstractMediaText } from '@/types';

// Import images
import mediaImageOne from '@/assets/images/program-afstand.jpg';
import mediaImageTwo from '@/assets/images/program-micro.jpg';
import codingAbstract from '@/assets/images/coding.jpg';
import wireframeAbstract from '@/assets/images/wireframe.jpg';

// MediaText first section data
const mediaTextSectionOne: MediaTextSection[] = [
  {
    title: 'Via afstandonderwijs',
    text: 'Via afstandsonderwijs word je getraind in sociale vaardigheden om op een goede manier met jezelf, je collega’s en je werk om te gaan. Na drie jaar heb je een diploma in handen waarmee je aan de slag kan als digitale vormgever, front-end ontwerper van websites, ...',
    media: mediaImageOne,
    onHome: false,
  },
];

// MediaText second section data
const mediaTextSectionTwo: MediaTextSection[] = [
  {
    title: 'Micro degree',
    text: 'Je wordt een expert in webdesign (HTML, CSS en Javascript) om visueel mooie front-end websites te ontwikkelen.  Je leert een website of een CMS opzetten en beheren, gecombineerd met aspecten uit de digitale economie.',
    media: mediaImageTwo,
    imageLeft: true,
    onHome: false,
  },
];

// Abstract integratie text data
const integratieContent: AbstractMediaText[] = [
  {
    title: 'Integratie',
    subTitle: 'Werkplekleren en multimedia-projecten',
    text: 'Tijdens je opleiding zal je tijdens werkplekleren en multimedia-projecten werken aan grotere projecten, recht uit het werkveld, die focussen op het hele proces van design.',
    imageOne: codingAbstract,
    imageTwo: wireframeAbstract,
    ImagesLeft: true,
  },
];
</script>
<style lang="scss"></style>