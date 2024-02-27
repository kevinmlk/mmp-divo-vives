<template>
  <main>
    <!-- Intro-text -->
    <div class="intro-text">
      <h1>Enkele projecten</h1>
      <p>
        Bekijk enkele voorbeelden van projecten en ontwerpen van onze (oud)studenten digitale vormgeving.
      </p>
    </div>
    <!-- Projects section -->
    <div id="projects-section" class="container-fixed">
      <div class="subject-filter">
        <div class="filter-titles">
          <span class="filter-tag">Filter op:</span>
          <span class="subjects-filter" @click="toggleSubjects">Vakken<font-awesome-icon icon="fa-solid fa-chevron-down"
              class="chevron-icon"></font-awesome-icon>
          </span>
        </div>
        <ul class="filters-container">
          <li v-for="subjectName, index in subjects" :key="index"><label><input v-model="checkedSubject" type="checkbox"
                :value="subjectName.name" checked>{{
                  subjectName.name
                }}</label></li>
        </ul>
      </div>
      <!-- <div>checked: {{ checkedSubject }}</div> -->
      <ProjectThumb :filter="checkedSubject" />
    </div>
  </main>
  <!-- Marquee slider -->
  <MarqueeSlider :background="'bg-color'" />
</template>
<script setup lang="ts">
// Import Marquee slider
import MarqueeSlider from '@/components/MarqueeSlider.vue';

// Import comps
import ProjectThumb from '@/components/ProjectThumb.vue';

// Import data
import { subjects } from '@/data/data';
import { ref } from 'vue';

// ref
const checkedSubject = ref(subjects.map(subject => subject.name));

// Toggle subjects visibility
const toggleSubjects = (e: any) => {
  const curr = e.target.parentElement;
  const nextEl = curr.nextSibling;
  console.log(nextEl);
  nextEl.classList.toggle('show-subjects');
};
</script>
<style lang="scss">
#projects-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-bottom: 7rem;

  .subject-filter {
    width: 77%;
    display: flex;
    gap: 1rem;
    flex-direction: column;

    .filter-titles {
      display: flex;
      gap: 1rem;

      .filter-tag {
        font-weight: 500;
      }

      .subject-filter {
        transition: $link-trans;
      }

      .subjects-filter:hover {
        cursor: pointer;
        transition: $link-trans;
        opacity: .75;
      }

      .chevron-icon {
        font-size: .6em;
        color: $theme-black;
        margin-left: .5rem;
        margin-bottom: .1rem;
      }
    }

    .filters-container {
      display: none;
    }

    .filters-container.show-subjects {
      display: flex;
      flex-wrap: wrap;
      gap: .75rem;
      padding: 1rem;
      margin-top: 1rem;
      font-weight: 300;
      font-size: .8em;
      background-color: #f2f2f2;
      position: relative;
      border-radius: 5px;
    }
  }
}
</style>