<template>
  <section id="products" class="mb-10">
    <v-row>
      <v-col class="col-md-12 col-sm-12">
        <div class="title-text mb-4 orange white--text text-center">
          <h2>Sản Phẩm</h2>
        </div>
        <div class="content">
          <v-tabs color="orange accent-4" right>
            <v-tab v-for="category in categories" :key="category.id">{{
              category.name
            }}</v-tab>
            <v-tab-item v-for="category in categories" :key="category.id">
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="(product, index) in category.products"
                    :key="index"
                    cols="12"
                    md="3"
                    sm="4"
                  >
                    <Product :product="product" :categoryId="category.id"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import Product from "./Product";
export default {
  components: {
    Product,
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
  },
};
</script>
<style lang="scss" scoped>
#products {
  .title-text {
    width: 340px;
    padding-top: 5px;
    transform: skew(-10deg);
    cursor: pointer;
    h2 {
      transform: skew(10deg);
    }
    &:hover {
      background: #f7b450;
    }
  }
}
</style>
