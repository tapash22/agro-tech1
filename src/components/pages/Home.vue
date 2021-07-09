<template>
  <div id="home">
    <div class="container">
      <Details />
      <div class="row">
        <div class="col-md-12">
          <Slider />
        </div>
      </div>
      <div class="items">
        <div
          class="col-md-3"
          v-for="(img, index) in images"
          :key="img"
          :index="index"
        >
          <a href="https://postimages.org/"><h3>{{img}}</h3></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../services/Slider.vue";
 import Details from '../../services/Details.vue';
export default {
  name: "app",
  components: {
    Slider,
     Details,
  },
  data() {
    return {
      images: [
        "product1",
        "product2",
        "product3",
        "product4",
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgb(238, 234, 234);
  padding-top: 80px;
  margin-bottom: 20px;
}
.row {
  width: 100%;
  height: 450px;
  position: relative;
 
}
.row .col-md-12 {
  width: 100%;
  height: 450px;
  padding-top: 20px;
}
.items {
  position: relative;
  display: flex;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 300px;
}
.col-md-3 {
  width: 22%;
  height: 250px;
  background: green;
  overflow: hidden;
  transition: 0.5s ease;
  transform: translateY(0);
  display: flex;
  justify-content: center;
  margin: 10px;
  border-radius: 10%;
  margin-top: 30px;
}
.col-md-3:hover {
  transform: translateY(-20px);
}

@media only screen and (max-width: 767px) {
  .col-md-3 {
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .col-md-3 img {
    width: 100px;
    height: 60;
    justify-items: center;
  }
}
</style>
