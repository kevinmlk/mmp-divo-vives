<template>
  <main>
    <!-- Intro-text -->
    <div class="intro-text">
      <h1>Contact</h1>
      <p>
        Vragen over de opleiding of wil je meer informatie krijgen?
        Contacteer ons gerust via de onderstaande formulier.
      </p>
    </div>
    <!-- Contact form and info section -->
    <div id="contact-form-section" class="container-fixed">
      <div id="form-section">
        <h2>Stuur ons een bericht</h2>
        <form @submit.prevent="handleSubmit">
          <fieldset>
            <div class="form-block">
              <input type="text" placeholder="Voornaam*">
              <input type="text" placeholder="Naam*">
            </div>
            <div class="form-block">
              <input type="text" placeholder="Emailadres*">
              <input type="text" placeholder="Onderwerp*">
            </div>
            <textarea name="question" id="question" placeholder="Boodschap*"></textarea>
          </fieldset>
          <button type="submit" class="button-black">Stuur bericht</button>
        </form>
      </div>
      <!-- Contact info section -->
      <div id="info-section">
        <h2>Contact</h2>
        <!-- Head of programme section -->
        <div id="prof-section" class="info-block">
          <h3>Opleidingshoofd</h3>
          <ul>
            <li>Xaverianenstraat 10<br>8200 Brugge</li>
            <li><a href="tel:+32486797902"><font-awesome-icon icon="fa-solid fa-phone"
                  class="campus-icons"></font-awesome-icon>+32 486 79 79 02</a></li>
            <li><a href="mailto:ann.buffel@vives.be"><font-awesome-icon icon="fa-solid fa-envelope"
                  class="campus-icons"></font-awesome-icon>ann.buffel@vives.be</a></li>
          </ul>
        </div>
        <!-- Campsus section -->
        <div id="campus-section" class="info-block">
          <h3>Hogeschool</h3>
          <ul>
            <li>Xaverianenstraat 10<br>8200 Brugge</li>
            <li><a href="tel:+3250305100"><font-awesome-icon icon="fa-solid fa-phone"
                  class="campus-icons"></font-awesome-icon>+32 50 30 51
                00</a></li>
            <li><a href="mailto:info@vives.be"><font-awesome-icon icon="fa-solid fa-envelope"
                  class="campus-icons"></font-awesome-icon>info@vives.be</a></li>
          </ul>
          <!-- Socials -->
          <ul class="socials">
            <li><a href="https://www.instagram.com/vives_cdd/" target="_blank"><font-awesome-icon
                  icon="fa-brands fa-instagram" class="socials-icons" /></a></li>
            <li><a href="https://www.facebook.com/vivestechgraduaten/" target="_blank"><font-awesome-icon
                  icon="fa-brands fa-facebook-f" class="socials-icons" /></a></li>
            <li><a href="https://www.tiktok.com/@vivestechnology" target="_blank"><font-awesome-icon
                  icon="fa-brands fa-tiktok" class="socials-icons" /></a></li>
            <li><a href="https://www.linkedin.com/company/vivestechnology/" target="_blank"><font-awesome-icon
                  icon="fa-brands fa-linkedin-in" class="socials-icons" /></a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- AbstractMedia section -->
    <template v-for="abstractContent, index in campusContent" :key="index">
      <AbstractMedia :abstractData="abstractContent" />
    </template>
  </main>
  <!-- Marquee slider -->
  <MarqueeSlider :background="'bg-color'" />
</template>
<script setup lang="ts">
// Import Marquee slider
import MarqueeSlider from '@/components/MarqueeSlider.vue';

// Import comps
import AbstractMedia from '@/components/AbstractMediaText.vue';

// Import type interfaces
import type { AbstractMediaText } from '@/types';

// Import images
import brugge from '@/assets/images/brugge.jpeg';
import bruggeCampus from '@/assets/images/brugge-campus.jpg';

// Abstract integratie text data
const campusContent: AbstractMediaText[] = [
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
#contact-form-section {
  display: flex;
  justify-content: center;
  gap: 7rem;
  margin-bottom: 10rem;

  #form-section {

    h2 {
      text-align: left;
      margin-bottom: 2rem;
    }

    fieldset {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .form-block {
        display: flex;
        gap: 2rem;

        input {
          padding-bottom: .5rem;
          padding-top: .5rem;
          width: 300px;
        }
      }

      input,
      textarea {
        font-family: $font-poppins;
        font-size: .9em;
        font-weight: 300;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid $theme-black;
      }

      textarea {
        height: 200px;
        width: 100%;
        resize: none;
      }
    }

    button {
      margin-top: 2rem;
    }

    button:hover {
      cursor: pointer;
    }
  }

  #info-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      text-align: left;
    }

    .info-block {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: .8em;
      font-weight: 400;

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .socials {
        flex-direction: row;

        .socials-icons {
          font-size: 1.2em;
        }
      }
    }
  }

  .campus-icons {
    margin-right: .5rem;

  }
}
</style>