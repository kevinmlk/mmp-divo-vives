<template>
  <main class="container-fixed">
    <!-- Breadcrumbs -->
    <div class="breadcrumbs">
      <router-link :to="{ name: 'projecten' }">Projecten \ </router-link>
      <span>{{ project?.title }}</span>
    </div>
    <!-- Intro-text -->
    <div class="intro-text">
      <h1>{{ project?.title }}</h1>
      <p>{{ project?.intro }}</p>
    </div>
    <!-- Description section -->
    <div class="description-section">
      <MediaText :mediaText="project?.description" />
    </div>
    <!-- Process section -->
    <div class="process-section">
      <h2>Proces</h2>
      <div class="process-container">
        <div class="process-item" v-for="processItem, index in project?.proces" :key="index">
          <h3>{{ processItem.title }}</h3>
          <p>{{ processItem.description }}</p>
        </div>
      </div>
    </div>
    <!-- Explanation section -->
    <div class="explanation-section">
      <h2>Uitwerking</h2>
      <template v-for="explanationItem, index in project?.uitwerking" :key="index">
        <MediaText :mediaText="explanationItem" />
      </template>
    </div>
    <!-- Results section -->
    <div class="results-section">
      <h2>Resultaat</h2>
      <div class="results-image-container">
        <template v-for="resultImage, index in project?.resultImages" :key="index">
          <img :src="resultImage">
        </template>
      </div>
    </div>
    <!-- Used programs section -->
    <div id="used-programs-section " class="list-summary">
      <span>Gebruikte programma's:</span>
      <ul>
        <li v-for="software, index in project?.usedPrograms" :key="index">{{ software }}</li>
      </ul>
    </div>
    <!-- Students section -->
    <div id="student-section" class="list-summary">
      <span>Studenten:</span>
      <ul>
        <li v-for="student, index in project?.students" :key="index">{{ student }}</li>
      </ul>
    </div>
  </main>
</template>
<script setup lang="ts">
// Import data
import { projects } from '@/data/data';
// Import router
import { useRoute } from 'vue-router';

// Import comps
import MediaText from '@/components/MediaText.vue';

// Import 
const route = useRoute();
const project = projects.find(element => element.url === route.params.title);

</script>
<style lang="scss">
.breadcrumbs {
  font-family: $font-barlow;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  margin-top: 7.5rem;
  font-size: .9em;
  letter-spacing: 1.25px;

  a {
    opacity: .75;
    transition: .25s ease all;
  }

  a:hover {
    opacity: 1;
    transition: .25s ease all;
  }

  span {
    text-decoration: underline;
    font-weight: 500;
  }
}

.description-section {
  margin-bottom: 10rem;
}

.process-section {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-bottom: 10rem;

  .process-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    .process-item {
      border: 1px solid $theme-black;
      border-radius: 5px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 250px;

      p {
        font-size: .9em;
      }
    }
  }
}

// Explanation section
.explanation-section {
  margin-bottom: 10rem;

  h2 {
    margin-bottom: 5rem;
  }
}

// Results section
.results-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 2.5rem;
  }

  .results-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    height: 1080px;
    width: 750px;
    gap: 2.5rem;

    img {
      width: 350px;
      border: 1px solid $theme-black;
    }
  }
}

.list-summary {
  display: flex;
  font-family: $font-barlow;
  text-transform: uppercase;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  span {
    text-decoration: underline;
    font-weight: 500;
  }

  ul {
    display: flex;
    gap: 2rem;
    font-weight: 300;

    li:not(:first-child) {
      list-style-type: disc;
      padding-left: .75rem;
    }
  }
}

#student-section {
  margin-bottom: 10rem;
}
</style>