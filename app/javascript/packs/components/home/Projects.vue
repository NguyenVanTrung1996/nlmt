<template>
  <section id="projects" class="mb-10">
    <v-row>
      <v-col class="col-md-12 col-sm-12">
        <div class="title-text mb-4 orange white--text text-center">
          <h2>Dự án</h2>
        </div>
        <div class="content">
          <v-tabs color="orange accent-4" right>
            <v-tab v-for="category in projectCategories" :key="category.id">{{
              category.name
            }}</v-tab>
            <v-tab-item
              v-for="category in projectCategories"
              :key="category.id"
            >
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="(project, index) in category.projects"
                    :key="index"
                    cols="12"
                    md="3"
                    sm="4"
                  >
                    <Project :project="project" />
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
import Project from "./Project";
export default {
  components: { Project },
  computed: {
    projectCategories() {
      return this.$store.getters["project-categories/getProjectCategories"];
    },
  },
};
</script>
<style lang="scss" scoped>
#projects {
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
