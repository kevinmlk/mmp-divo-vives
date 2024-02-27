<template>
  <div class="container container-fixed">
    <div id="landing-page">
      <div id="intro-text">
        <h1>Digitale<br>Vormgeving</h1>
        <p>Digitale vormgeving is een volwaardige graduaatsopleiding<br>van 2 jaar aan de hogeschool VIVES.</p>
        <div id="btn-link">
          <a class="button-black" href="https://inschrijven.vives.be/" target="_blank">Inschrijven</a>
          <router-link :to="{ name: 'over' }" class="arrow-link">Ontdek opleiding<font-awesome-icon
              icon="fa-solid fa-arrow-right" class="icon" /></router-link>
        </div>
      </div>
      <div id="image-container">
        <img src="@/assets/images/guy-pc.jpg" alt="design">
      </div>
    </div>
    <!-- Socials -->
    <div id="socials">
      <ul>
        <li><a href="https://www.instagram.com/vives_cdd/" target="_blank"><font-awesome-icon
              icon="fa-brands fa-instagram" class="socials-icons" /></a></li>
        <li><a href="https://www.facebook.com/vivestechgraduaten/" target="_blank"><font-awesome-icon
              icon="fa-brands fa-facebook-f" class="socials-icons" /></a></li>
        <li><a href="https://www.tiktok.com/@vivestechnology" target="_blank"><font-awesome-icon
              icon="fa-brands fa-tiktok" class="socials-icons" /></a></li>
        <li><a href="https://www.linkedin.com/company/vivestechnology/" target="_blank"><font-awesome-icon
              icon="fa-brands fa-linkedin-in" class="socials-icons" /></a></li>
      </ul>
      <a href="https://www.vives.be/nl" target="_blank"><img src="@/assets/images/vives.svg" alt="vives"></a>
    </div>
  </div>
  <!-- Marquee slider -->
  <MarqueeSlider />
  <main>
    <!-- Over -->
    <div class="media-text-container">
      <div class="media-text-images">
        <div class="media-images-1">
          <img src="@/assets/images/coding.jpg" alt="coding">
          <img src="@/assets/images/typography.jpg" alt="typography">
        </div>
        <img src="@/assets/images/wireframe.jpg" alt="wireframe">
      </div>
      <div class="media-text-content">
        <h2>Over</h2>
        <h3>De opleiding voor content creators.</h3>
        <p>
          Leer grafisch ontwerpen, ontpop je tot digital designer en maak online content voor websites en sociale
          media.
        </p>
        <router-link :to="{ name: 'over' }" class="arrow-link">Meer info<font-awesome-icon icon="fa-solid fa-arrow-right"
            class="icon" /></router-link>
      </div>
    </div>
    <!-- Pijlers -->
    <Pillars />
    <!-- Projects section -->
    <div id="projects-section" class="container-fixed">
      <h2>Projecten</h2>
      <ProjectThumb :limit="6" />
      <router-link :to="{ name: 'projecten' }" class="button-black">Ontdek projecten</router-link>
    </div>
    <!-- Programs section -->
    <div id="programs-section" class="container-fixed">
      <h2>Programma's</h2>
      <template v-for="program, index in programs" :key="index">
        <MediaText :mediaText="program" />
      </template>
    </div>
    <!-- Future jobs section -->
    <div class="container-fixed jobs-section">
      <h2>Toekomst</h2>
      <h3>Wat na je studie digitale vormgeving?</h3>
      <p>Na twee jaar heb je een diploma in handen waarmee je zowel verder kunt studeren om een bachelordiploma te behalen
        via een vervolgtraject of aan de slag kan als in één van de onderstaande beroepen.</p>
      <Jobs />
    </div>
    <!-- Testimonials -->
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
import Pillars from '@/components/Pillars.vue';
import MediaText from '@/components/MediaText.vue';
import Jobs from '@/components/Jobs.vue';
import Testimonial from '@/components/Testimonial.vue';
import ProjectThumb from '@/components/ProjectThumb.vue';

// Import type interfaces
import type { MediaTextSection } from '@/types';

// Imported images
import programAfstand from '@/assets/images/program-afstand.jpg';
import programMicro from '@/assets/images/program-micro.jpg';
import programIndividueel from '@/assets/images/program-individueel.jpg';

// MediaText program data
const programs: MediaTextSection[] = [
  {
    title: 'Via afstandsonderwijs',
    text: 'Communictaiemedewerker? Je grafische skills verbeteren? Leer na de werkuren online content maken, werken met grafische programmas en websites bouwen.',
    link: 'afstand',
    media: programAfstand,
    onHome: true,

  },
  {
    title: 'Micro degree digitale vormgeving',
    text: 'Maak kennis met de belangrijkste applicaties van grafisch ontwerp om profesionele en visueel sterke ontwerpen te maken voor jou of je werkgever. Korte opleiding op afstand.',
    link: 'afstand',
    media: programMicro,
    imageLeft: true,
    onHome: true,
  },
  {
    title: 'Individueel traject',
    text: 'Eerder verworven credits? Je kunt een vrijstelling verkrijgen van een opleidingsonderdeel als je beschikt over een eerder verworven kwalificatie (EVK).',
    link: 'afstand',
    media: programIndividueel,
    onHome: true,
  },
];
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 1rem;

  #landing-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

    #intro-text {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      h1 {
        text-align: left;
      }

      #btn-link {
        display: flex;
        align-items: center;
        gap: 2rem;

        router-link {
          display: flex;
          align-items: center;
        }
      }
    }

    #image-container {
      padding: 1.5rem;
      border: 1px solid $theme-black;
      border-radius: 500px;
      box-shadow: 8px 8px $theme-black;

      img {
        width: 300px;
        height: 400px;
        border-radius: 500px;
        border: 1px solid $theme-black;
      }
    }
  }

  #socials {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      gap: 1.5rem;

      .socials-icons {
        font-size: 1.25rem;
        opacity: .75;
        transition: $link-trans;
      }

      a:hover .socials-icons {
        transition: $link-trans;
        opacity: 1;
        text-shadow: $text-glow-dark;
      }
    }

    a img {
      width: 75px;
      filter: grayscale(100%);
      opacity: .75;
      transition: $link-trans;
    }

    a:hover img {
      opacity: 1;
      transition: $link-trans;
      text-shadow: $text-glow-dark;
    }
  }
}

.media-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 5rem;
  margin-bottom: 7rem;
  @include pageWidth();

  img {
    width: 225px;
    border-radius: 500px;
    border: 1px solid $theme-black;
  }

  .media-text-images {
    display: flex;
    gap: 2.5rem;
    align-items: center;

    .media-images-1 {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      img {
        height: 275px;
        width: 200px;
      }
    }

    img {
      height: 400px;
    }
  }

  .media-text-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      text-align: left;
    }
  }
}

#projects-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-bottom: 7rem;
}
</style>
