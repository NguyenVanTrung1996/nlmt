<template>
  <section id="introduction" class="mb-10 mt-10">
    <v-row>
      <v-col class="md-6 sm-6">
        <div class="title-text mb-4 orange white--text text-center">
          <h2>GIỚI THIỆU VỀ CHÚNG TÔI</h2>
        </div>
        <div class="content">
          <p class="subtitle-1">
            QTUCO ra đời với xứ mệnh xây dựng nên những công trình chất lượng
            cao, nghiên cứu phát triển và sản xuất các sản phẩm về năng lượng
            sạch tiên tiến phục vụ đời sống xã hội, góp phần đắc lực vào sự
            nghiệp phát triển ngành năng lượng của Việt Nam, xây dựng cơ sở hạ
            tầng hiện đại cho đất nước.
            <br />
            <br />
            Với đội ngũ gần 50 kỹ sư, cán bộ công nhân viên nhiều kinh nghiệm
            QTUCO đã và đang là đối tác tin cậy của các công ty, tập đoàn lớn
            trong và ngoài nước về các công trình xây lắp và năng lượng.
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
