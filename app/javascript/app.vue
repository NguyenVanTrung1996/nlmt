<template>
  <v-app id="app">
    <Header />
    <Slide />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./packs/components/shared/Header";
import Slide from "./packs/components/shared/Slide";
import Footer from "./packs/components/shared/Footer";

export default {
  data: function () {
    return {
      message: "Hello Vue!",
    };
  },
  components: {
    Header,
    Slide,
    Footer,
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

.w {
  &-100 {
    width: 100%;
  }
}
.h {
  &-100 {
    height: 100%;
  }
}
.position {
  &-relative {
    position: relative;
  }
  &-absolute {
    position: absolute;
  }
}

p {
  padding: 0 !important;
  margin: 0 !important;
}

.cursor {
  &-pointer{
    cursor: pointer;
  }
}
</style>
