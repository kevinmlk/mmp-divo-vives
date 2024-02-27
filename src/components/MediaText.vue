<template>
  <div class="media-text-container"
    :class="{ 'image-left': props.mediaText.imageLeft, 'default-style': !props.mediaText.onHome }">
    <div class="media-text-content">
      <ul :class="{ 'subjects': props.mediaText.subjects }">
        <li v-for="subject, indexSubject in props.mediaText.subjects" :key="indexSubject">{{ subject }}</li>
      </ul>
      <h3>{{ props.mediaText.title }}</h3>
      <p>{{ props.mediaText.text }}</p>
      <router-link :to="{ name: props.mediaText.link }" class="arrow-link">Meer info<font-awesome-icon
          icon="fa-solid fa-arrow-right" class="icon" /></router-link>
    </div>
    <div class="media-image-container" :class="{ 'home-style': props.mediaText.onHome }">
      <img :src="props.mediaText.media" :alt="props.mediaText.title">
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['mediaText']);
</script>
<style lang="scss">
.image-left {
  flex-direction: row-reverse;
}

.media-text-container {
  display: flex;

}

.default-style {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7rem;
  margin-bottom: 5rem;

  .arrow-link {
    display: none;
  }

  img {
    width: 350px;
    height: 250px;
    box-shadow: 8px 8px $theme-black;
    border-radius: 5px;
  }

}

.media-text-content {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  gap: 1rem;
}

.home-style {
  border: 1px solid $theme-black;
  padding: 1rem;
  border-radius: 500px;
  box-shadow: 1px 8px $theme-black;

  img {
    border-radius: 500px;
    height: 125px;
    width: 375px;
    object-fit: cover;
    border: 1px solid $theme-black;
    height: 125px !important;
  }
}
</style>