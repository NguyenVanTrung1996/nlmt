<template>
  <div class="header">
    <v-toolbar height="90" class="orange white--text">
      <v-toolbar-title>
        <v-img
          class="logo ml-8"
          :src="require('../../assets/home/logo.png')"
          alt="default-avatar"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <div class="pc">
          <ul class="menu d-flex align-center text-uppercase">
            <li class="mr-8">
              <a
                class="nav-link white--text subtitle font-weight-bold text-decoration-none"
                href="#introduction"
                >Giới Thiệu</a
              >
            </li>
            <li class="mr-8">
              <a
                class="nav-link white--text subtitle font-weight-bold text-decoration-none"
                href="#products"
                >Sản Phẩm</a
              >
            </li>
            <li class="mr-8">
              <a
                class="nav-link white--text subtitle font-weight-bold text-decoration-none"
                href="#projects"
                >Dự Án</a
              >
            </li>
            <li class="mr-8 subtitle font-weight-bold">
              <v-btn rounded dark> Hotline: 0823 282 292 </v-btn>
            </li>
          </ul>
        </div>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.header {
  .logo {
    height: 60px;
    width: 130px;
    object-fit: cover;
  }

  .menu {
    list-style-type: none;
    height: 100%;

    .nav-link {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        height: 1em;
        width: 100%;
        border-bottom: 1px solid;
        margin-top: 10px;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: scale(0, 1);
        transform: scale(0, 1);
      }

      &:hover:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
}
</style>
