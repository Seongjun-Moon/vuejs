<template>
  <div id="app">
    {{ title }}
    <Buttons @dogButtonClick="getDog" @catButtonClick="getCat" />
    <DogImage :dogImages="dogImages" />
    <CatImage :catImages="catImages" />
  </div>
</template>

<script>
import DogImage from "./components/DogImage.vue";
import CatImage from "./components/CatImage.vue";
import Buttons from "./components/Buttons.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    DogImage,
    CatImage,
    Buttons,
  },
  data() {
    return {
      title: "Dog&Cat",
      catImages: [],
      dogImages: [],
    };
  },
  methods: {
    getDog() {
      axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
        console.log(res.data.message);
        this.dogImages.push({
          id: Date.now(),
          url: res.data.message,
        });
      });
    },
    getCat() {
      axios.get("https://api.thecatapi.com/v1/images/search").then((res) => {
        this.catImages.push({
          id: Date.now(),
          url: res.data[0].url,
        });
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
