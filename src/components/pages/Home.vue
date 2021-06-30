<template>
  <div id="home">
      <div class="slider">
          <Slider />
      </div>
    <div class="row items">
    <div class="col-md-3" v-for="(img,index) in images" :key="img" :index="index">
      <a><h4>Company name</h4></a>
      <a href="#"><img :src="img"  /></a>
    </div>
  </div>
  </div>
 
</template>

<script>
import Slider from "../../services/Slider.vue";
export default {
  name: "app",
  components: {
    Slider,
  },
  data(){
      return{
             images: [
        "https://i.postimg.cc/L64F1bQj/partner1.jpg",
        "https://i.postimg.cc/25ZsYR3N/partner2.jpg",
        "https://i.postimg.cc/kGnzW2s7/partner3.jpg",
        "https://i.postimg.cc/7YG3NQrG/partners4.png",
      ],
      };
  },
  mounted () {
  window.scrollTo(0, 0);
},
};
</script>

<style scoped>
.slider {
  width: 100%;
  height: 650px;
}
.items{
  margin-bottom: 20px;
  justify-content: center;
}
.col-md-3{
  width: 300px;
}
.items a{
  text-decoration: none;
  cursor: pointer;
}
.items h4{
  padding: 10px;
  border: 2px solid greenyellow;
  text-align: center;
  color: #000;
}
.items img{
  justify-content: center;
  width: 250px;
  height: 200px;
  filter: brightness(70%);
}
.items img:hover{
  filter: brightness(100%);
}

@media only screen and (max-width: 767px){
  .col-md-3{
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .col-md-3 img{
    width: 100px;
    height: 60;
    justify-items: center;
  }
}
</style>
