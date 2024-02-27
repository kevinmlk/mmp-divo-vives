<template>
  <div class="container-fixed abstract-container" :class="{ 'images-left': props.abstractData.ImagesLeft }">
    <div class="abstract-media-content">
      <h2>{{ props.abstractData.title }}</h2>
      <h3>{{ props.abstractData.subTitle }}</h3>
      <p>{{ props.abstractData.text }}</p>
      <a :href="props.abstractData.link" target="_blank" class="arrow-link"
        :class="{ 'no-link': !props.abstractData.link }">Meer info<font-awesome-icon icon="fa-solid fa-arrow-right"
          class="icon" /></a>
    </div>
    <div class="abstract-media-images">
      <img :src="props.abstractData.imageOne" :alt="props.abstractData.title">
      <img class="second-image" :src="props.abstractData.imageTwo" :alt="props.abstractData.title">
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['abstractData']);
</script>
<style lang="scss">
.abstract-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 10rem;

  .abstract-media-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 550px;
    align-self: flex-end;

    h2 {
      text-align: left;
    }

    .no-link {
      display: none;
    }
  }

  .abstract-media-images {
    display: flex;
    gap: 1rem;

    img {
      width: 150px;
      border-radius: 500px;
      height: 175px;
      border: 1px solid $theme-black;
    }

    .second-image {
      height: 250px !important;
      margin-top: 3rem;
    }
  }
}

.images-left {
  display: flex;
  flex-direction: row-reverse;
  gap: 5rem
}
</style>