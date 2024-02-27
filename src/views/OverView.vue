<template>
  <main>
    <!-- Intro-text -->
    <div class="intro-text">
      <h1>Over de opleiding</h1>
      <p>Leer grafisch ontwerpen, ontpop je tot digital designer en maak online content voor websites en sociale media.
      </p>
    </div>
    <!-- About section -->
    <div id="about-section" class="container-fixed">
      <h2>Wat leer je in digitale vormgeving?</h2>
      <template v-for="content, index in aboutData" :key="index">
        <MediaText :mediaText="content" />
      </template>
    </div>
    <!-- Organisation section -->
    <div id="organisation-section" class="container-fixed">
      <h2>Organisatie</h2>
      <h3>Opbouw studie digitale vormgeving</h3>
      <p>Na elke zeven weken les volgt een evaluatieweek. Sommige vakken worden geëvalueerd door opdrachten, voor andere
        vakken worden praktijkexamens ingericht.</p>
      <p>Afhankelijk van de studie die je kiest, zijn flexibele instap- en evaluatiesystemen mogelijk. Op die manier kan
        je je studie laten aansluiten bij je eigen situatie en je ambities.</p>
    </div>
    <!-- AbstractMedia section -->
    <template v-for="abstractContent, index in mediaTextData" :key="index">
      <AbstractMedia :abstractData="abstractContent" />
    </template>
    <!-- Jobs section -->
    <div class="jobs-section">
      <h2>Eenmaal afgestudeert</h2>
      <h3>Wat na je studie digitale vormgeving?</h3>
      <p>Na twee jaar heb je een diploma in handen waarmee je aan de slag kan als:</p>
      <Jobs />
    </div>
    <!-- Testimonials section -->
    <div class="container-fixed testimonials-section">
      <h2>Succesverhalen van onze alumni digitale vormgeving</h2>
      <Testimonial />
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
import Testimonial from '@/components/Testimonial.vue';
import Jobs from '@/components/Jobs.vue';
import AbstractMedia from '@/components/AbstractMediaText.vue';

// Import type interface
import type { MediaTextSection } from '@/types';
import type { AbstractMediaText } from '@/types';

// Import images
import graphicImage1 from '@/assets/images/pillar-graphic.jpg';
import graphicImage2 from '@/assets/images/graphic-image.jpg';
import graphicImage3 from '@/assets/images/program-individueel.jpg';
// Images for AbstractMedia section
import brugge from '@/assets/images/brugge.jpeg';
import bruggeCampus from '@/assets/images/brugge-campus.jpg';

const aboutData: MediaTextSection[] = [
  {
    title: 'Opleiding voor creatieve duizendpoten',
    text: 'Je gaat van start met graphic design en je past deze vaardigheden toe binnen allerlei ICT-tools om visuele content vorm te geven.  Daarnaast wordt je een expert in webdesign om visueel mooie front-end websites te ontwikkelen.',
    media: graphicImage1,
    onHome: false,
  },
  {
    title: 'Waarom digitale vormgeving?',
    text: 'Digitale vormgeving is de ideale graduaatsopleiding voor mensen die gefascineerd zijn door beeld en geluid, het internet en sociale media. Voor wie naast z\'n grafische skills en creativiteit ook sterk zijn in web technologieën?',
    media: graphicImage2,
    imageLeft: true,
    onHome: false,
  },
  {
    title: 'Hoelang doe ik over deze opleiding? ',
    text: 'Deze opleiding duurt twee jaar in dagonderwijs en heeft een studieomvang van 120 studiepunten. Graduaatsopleidingen bereiden voor op een beroep, maar ze bereiden je ook voor op de doorstroom naar een professionele bacheloropleiding.',
    media: graphicImage3,
    onHome: false,
  },
];

// Abstract media text data
const mediaTextData: AbstractMediaText[] = [
  {
    title: 'Campus',
    subTitle: 'VIVES Brugge Xaverianenstraat',
    text: 'Onze campussen zijn leef- en studeercampussen. Je vindt er alle faciliteiten om je studies te ondersteunen. Niet alleen dit, maar ook het studentenleven kan al op de campus van start gaan.',
    link: 'https://www.vives.be/nl/over-vives/campussen/vives-brugge-xaverianenstraat',
    imageOne: brugge,
    imageTwo: bruggeCampus,
    ImagesLeft: false,
  },
];
</script>
<style lang="scss">
#about-section {

  h2 {
    margin-bottom: 3.5rem;
  }
}

#organisation-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 7rem;
  margin-bottom: 7rem;

  p {
    text-align: center;
    max-width: 700px;
  }
}
</style>