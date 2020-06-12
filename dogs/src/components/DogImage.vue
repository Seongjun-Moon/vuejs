<template>
  <div>
    <br />

    <div v-for="dogImage in dogImages" :key="dogImage.id">
      <img :src="dogImage.url" alt="" width="200" height="200" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DogImage",
  props: {
    dogImages: Array,
  },
};
</script>

<style></style>
