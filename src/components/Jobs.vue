<template>
  <div class="jobs-container">
    <div class="job" v-for="job, index in jobs" :key="index">
      <img :src="job.media" :alt="job.title" :class="{ 'image-even': job.even }">
      <span class="job-title">{{ job.title }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
// Import type interface
import type { Job } from '@/types';

// Import jobs images
import graphicDesigner from '@/assets/images/typography.jpg';
import contentCreator from '@/assets/images/content-creator.jpg';
import UXDesigner from '@/assets/images/wireframe.jpg';
import frontEndDev from '@/assets/images/pillar-web.jpg';
import digitalDesigner from '@/assets/images/dig-designer.jpg';

// Fill Job data
const jobs: Job[] = [
  {
    media: graphicDesigner,
    title: 'Graphic Designer',
  },
  {
    media: contentCreator,
    title: 'Content Creator',
    even: true,
  },
  {
    media: UXDesigner,
    title: 'UX Designer',
  },
  {
    media: frontEndDev,
    title: 'Front-end Developer',
    even: true,
  },
  {
    media: digitalDesigner,
    title: 'Digital Designer',
  },
];
</script>
<style lang="scss">
.jobs-container {
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 2.5rem;

  .job {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;

    img {
      width: 150px;
      height: 215px;
      border-radius: 500px;
      border: 1px solid $theme-black;
      object-fit: cover;
    }

    .image-even {
      margin-top: 7rem;
    }
  }
}
</style>