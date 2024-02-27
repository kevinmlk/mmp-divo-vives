<template>
  <div class="project-container">
    <div v-for="project, index in getProjects()" :key="index" class="project-thumb">
      <img :src="project.image" @click="viewDetails(project.url)">
      <ul class="subjects">
        <li v-for="subject, indexSubject in project.subjects" :key="indexSubject">{{ subject }}</li>
      </ul>
      <div class="name-link">
        <h4 @click="viewDetails(project.url)">{{ project.title }}</h4>
        <span class="arrow-link" @click="viewDetails(project.url)">Meer info<font-awesome-icon
            icon="fa-solid fa-arrow-right" class="icon" /></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// Import data
import { projects } from '@/data/data';
import type { SubjectsName } from '@/types';

import { useRouter } from 'vue-router';

// Prop
const props = defineProps<{
  limit?: number,
  filter?: SubjectsName[]
}>();

const router = useRouter();

const viewDetails = (projectUrl: string) => {
  router.push({
    name: 'projectendetails',
    params: {
      title: projectUrl,
    },
  });
};

const getProjects = () => {
  let changedProjects = projects;
  if (props.filter) {
    changedProjects = projects.filter(project => project.subjects.find(subject => props.filter?.includes(subject)));
  }
  if (props.limit) {
    changedProjects = changedProjects.slice(0, props.limit);
  }
  return changedProjects;
};
</script>
<style lang="scss">
.project-container {
  display: grid;
  grid-template-columns: repeat(2, 460px);
  column-gap: 7rem;
  row-gap: 5rem;

  .project-thumb {
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    // margin-bottom: 5rem;

    img {
      width: 100%;
      height: 300px;
      border: 1px solid $theme-black;
      border-radius: 5px;
      box-shadow: 8px 8px $theme-black;
      transition: $link-trans;
    }

    img:hover {
      cursor: pointer;
      transition: $link-trans;
      opacity: .75;
    }

    .name-link {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h4 {
        transition: $link-trans;
      }

      h4:hover {
        cursor: pointer;
        transition: $link-trans;
        opacity: .75;
      }

      span {
        width: 90px;
      }

      span:hover {
        cursor: pointer;
      }
    }
  }
}
</style>