<template>
  <div class="testimonial-container">
    <font-awesome-icon @click="deincrement" icon="fa-solid fa-chevron-left" class="chevron-icons" />
    <div class="testimonial">
      <font-awesome-icon icon="fa-solid fa-quote-right" class="quote-icon"></font-awesome-icon>
      <p>{{ testimonials[i].message }}</p>
      <div class="testimonial-content">
        <div class="testimonial-pic">
          <img :src="testimonials[i].profilePic" :alt="testimonials[i].name">
        </div>
        <div class="testimonial-text">
          <span class="testimonial-name">{{ testimonials[i].name }}</span>
          <span class="testimonial-class">{{ testimonials[i].classOf }}</span>
        </div>
      </div>
    </div>
    <font-awesome-icon @click="increment" icon="fa-solid fa-chevron-right" class="chevron-icons" />
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '@/types';
import { ref } from 'vue';

// Import images
import Mergim from '@/assets/images/mergim.jpg';
import Tin from '@/assets/images/tin.jpg';
import Brecht from '@/assets/images/brecht.jpg';
import Lean from '@/assets/images/lean.jpg';
import Kevin from '@/assets/images/kevin.jpg';

const i = ref(0);
const deincrement = () => {
  if (i.value === 0) {
    i.value = testimonials.length - 1;
  } else {
    i.value--;
  }
};

const increment = () => {
  if (i.value === testimonials.length - 1) {
    i.value = 0;
  } else {
    i.value++;
  }
};

const testimonials: Testimonial[] = [
  {
    name: 'Mergim Topallaj',
    classOf: 'Alumni \'23',
    profilePic: Mergim,
    message: '"Als afgestudeerde aan de Hogeschool VIVES, heb ik praktijkervaring opgedaan en een breed scala aan technische en creatieve vaardigheden ontwikkeld. De focus van het programma op real-world toepassingen en mentorschap van professionals uit de industrie bereidden me voor op een succesvolle carrière in de industrie. Ik kan het ten zeerste aanbevelen aan iedereen die geïnteresseerd is in een carrière in digitale vormgeving."',
  },
  {
    name: 'Tin Duong',
    classOf: 'Alumni \'23',
    profilePic: Tin,
    message: '"Digitale vormgeving aan Hogeschool VIVES was voor mij levensveranderend. Het projectmatig leren en de toegewijde faculteit bereidden me voor op succes in mijn vakgebied. Dankzij mijn opleiding kon ik meteen na mijn afstuderen een baan vinden. Ik raad de digitale vormgeving ten zeerste aan aan iedereen die een carrière in de digitale wereld nastreeft."',
  },
  {
    name: 'Brecht Sinnaeve',
    classOf: 'Alumni \'23',
    profilePic: Brecht,
    message: '"Ik ben zo dankbaar voor mijn ervaring in digitale vormgeving aan de hogeschool VIVES. Door de focus van het programma op praktijkgericht leren en toepassingen in de echte wereld kon ik praktische vaardigheden ontwikkelen en industrie-ervaring opdoen. De docenten waren ook ongelooflijk ondersteunend en hielpen me mijn professionele netwerk op te bouwen. Ik kan digitale vormgeving ten zeerste aanbevelen aan iedereen die op zoek is naar een kickstart voor zijn of haar carrière in de grafische wereld."',
  },
  {
    name: 'Lean Valcke',
    classOf: 'Alumni \'23',
    profilePic: Lean,
    message: '"De opleiding digitale vormgeving aan de Hogeschool VIVES bood me een uitgebreide opleiding die me voorbereidde op een succesvolle carrière in content creation. De hands-on benadering van leren en toegewijde faculteitsleden hielpen me het vertrouwen en de ervaring te krijgen die ik nodig had om uit te blinken in mijn vakgebied. Ik kan de opleiding ten zeerste aanbevelen aan iedereen die op zoek is naar een carrière in content creation."',

  },
  {
    name: 'Kevin Malekera',
    classOf: 'Alumni \'23',
    profilePic: Kevin,
    message: '"Ik vond het geweldig om in de opleiding digitale vormgeving aan de Hogeschool VIVES te studeren! De lessen waren leuk en boeiend en de docenten waren gepassioneerd over hun onderwerpen. Ik heb veel geleerd over web development en kon mijn kennis toepassen op echte projecten. Het programma hielp me ook mijn professionele netwerk op te bouwen en kansen op werk te vinden na mijn afstuderen."',
  },
];
</script>

<style lang="scss">
.testimonial-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  justify-content: space-evenly;

  .chevron-icons {
    font-size: 2em;
  }

  .chevron-icons:hover {
    cursor: pointer;
  }

  .quote-icon {
    position: absolute;
    top: -22px;
    right: 40px;
    font-size: 2.5em;
  }

  .testimonial {
    position: relative;
    width: 40%;
    border: 1px solid $theme-black;
    border-radius: 5px;
    padding: 2rem;
    box-shadow: 8px 8px $theme-black;

    p {
      font-weight: 300;
    }

    .testimonial-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 1.5rem;

      .testimonial-pic {
        padding: .25rem;
        border: 1px solid $theme-black;
        border-radius: 50%;
        height: 60px;
        width: 60px;

        img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .testimonial-text {
        display: flex;
        flex-direction: column;
        gap: .25rem;

        .testimonial-name {
          font-size: 1em;
          font-weight: 500;
        }

        .testimonial-class {
          font-family: $font-barlow;
          font-size: .9em;
          font-weight: 400;
        }
      }
    }
  }
}
</style>