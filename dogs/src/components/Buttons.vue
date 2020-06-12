/<template>
  <div>
    <button @click="dogClicked">Dog Image</button>

    <button @click="catClicked">Cat Image</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  methods: {
    dogClicked() {
      this.$emit("dogButtonClick");
    },
    catClicked() {
      this.$emit("catButtonClick");
    },
  },
};
</script>

<style></style>
