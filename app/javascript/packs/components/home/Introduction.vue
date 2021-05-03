<template>
  <section id="introduction" class="mb-10 mt-10">
    <v-row>
      <v-col class="md-6 sm-6">
        <div class="title-text mb-4 orange white--text text-center">
          <h2>GIỚI THIỆU VỀ CHÚNG TÔI</h2>
        </div>
        <div class="content">
          <p class="subtitle-1">
            Công ty TNHH xây lắp và dịch vụ Năng Lượng Quốc Tuấn được thành lập
            với nòng cốt là các kỹ sư của trường Học Viện Kỹ Thuật Quân Sự cùng
            các cựu quân nhân đã từng phục vụ trong quân đội nhân dân Việt
            Nam.<br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            reiciendis et quas assumenda nobis, consequuntur quisquam, optio
            totam corporis blanditiis velit autem error excepturi, sunt itaque
            iste ex quasi quos!
          </p>
        </div>
      </v-col>
      <v-col class="md-6 sm-6 introduction-image">
        <img :src="require('../../assets/home/introduction.jpeg')" alt="" />
      </v-col>
    </v-row>
  </section>
</template>

<style lang="scss" scoped>
#introduction {
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

  .introduction-image {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
