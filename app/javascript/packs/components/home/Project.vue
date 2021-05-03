<template>
  <div class="project">
    <v-card class="mx-auto" max-width="344">
      <v-carousel
        cycle
        height="200"
        hide-delimiter-background
        show-arrows-on-hover
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item, i) in project.images"
          :key="i"
          :src="require('../../assets/projects/' + item)"
          class="current-pointer"
        ></v-carousel-item>
      </v-carousel>

      <v-card-title
        class="subtitle-2 text-center text-uppercase project-name d-block"
        v-html="project.name"
      >
      </v-card-title>

      <v-card-actions>
        <v-btn color="orange lighten-2" text>
          Công suất: {{ project.wattage }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text v-html="project.description"> </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["project"],
  data: () => ({
    show: false,
  }),
};
</script>

<style lang="scss" scoped>
.project {
  &-name {
    word-break: break-word;
  }
}
</style>
