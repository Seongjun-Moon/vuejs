<template>
  <div>
    <br />

    <div>
      <div v-for="catImage in catImages" :key="catImage.id">
        <img :src="catImage.url" alt="" width="200" height="200" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatImage",
  props: {
    catImages: Array,
  },
};
</script>

<style></style>
