<template>
  <div class="product">
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="require('../../assets/products/' + product.image)"
        aspect-ratio="1"
        class="product-image"
      ></v-img>

      <v-card-title class="subtitle-2 text-center text-uppercase">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <p class="product-name" v-bind="attrs" v-on="on">
              {{ product.name }}
            </p>
          </template>
          <span class="text-uppercase">{{ product.name }}</span>
        </v-tooltip>
      </v-card-title>

      <v-card-actions>
        <v-btn color="orange" text> Liên hệ: 0823 282 292 </v-btn>
        <v-btn icon @click="show = !show" v-if="categoryId == '4'">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition v-if="categoryId == '4'">
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text v-html="product.description">
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["product", "categoryId"],
  data: () => ({
    show: false,
  }),
};
</script>

<style lang="scss" scoped>
.product {
  &-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
}
</style>
