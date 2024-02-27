<template>
  <main>
    <!-- Intro-text -->
    <div class="intro-text">
      <h1>Curriculum</h1>
      <p>
        Als digitaal vormgever leer je niet alleen grafisch ontwerpen maar ontpop je tot een flexibele digital designer
        en maak je content voor websites.
      </p>
    </div>
    <!-- Main fields section -->
    <div id="fields-section" class="container-fixed">
      <h2>Grafisch en visueel vormgeven van online inhoud van websites, platformen en apps</h2>
      <template v-for="content, index in curriculum" :key="index">
        <MediaText :mediaText="content" />
      </template>
    </div>
    <!-- Curriculum section -->
    <div class="curriculum-section container-fixed">
      <h2>Opleidingsprogramma</h2>
      <h3>ECTS-fiche</h3>
      <p>Deze opleiding duurt twee jaar in dagonderwijs en heeft een studieomvang van 120 studiepunten. Je krijgt les in
        kleine groepen en zal veel aan je ICT-vaardigheden werken in praktijksessies en projecten.</p>
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

// Import type interfaces
import type { MediaTextSection } from '@/types';
import type { AbstractMediaText } from '@/types';

// Import images
import drawing from '@/assets/images/drawing.jpg';
import webDev from '@/assets/images/webdev.jpg';
import web from '@/assets/images/pillar-web.jpg';
import integration from '@/assets/images/integration.jpg';

// MediaText curriculum data
const curriculum: MediaTextSection[] = [
  {
    title: 'Grafische vormgeving',
    text: 'We doen aan photo-edting, video: shooting en editing, illustrations & graphics, desktop publishing ..., We maken hierbij gebruik van de Adobe-pakketten (Photoshop, Première Pro, Illustrator, InDesign, ...).',
    media: drawing,
    onHome: false,
  },
  {
    title: 'Web development',
    text: 'Je wordt een expert in webdesign (HTML, CSS en Javascript) om visueel mooie front-end websites te ontwikkelen.  Je leert een website of een CMS opzetten en beheren, gecombineerd met aspecten uit de digitale economie.',
    link: 'afstand',
    media: webDev,
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
    imageOne: web,
    imageTwo: integration,
    ImagesLeft: true,
  },
];
</script>
<style lang="scss">
#fields-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;

  h2 {
    max-width: 750px;
    margin-bottom: 4rem;
  }
}

.curriculum-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;

  p {
    width: 750px;
    text-align: center;
  }
}

.infoday-section {
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
}
</style>