<template>
  <div class="container">
    <Introduction />
    <Products />
    <Projects />
  </div>
</template>
<script>
import Introduction from "../components/home/Introduction";
import Products from "../components/home/Products";
import Projects from "../components/home/Projects";

export default {
  components: {
    Introduction,
    Products,
    Projects,
  },
};
</script>
<style lang="scss" scoped>
</style>
