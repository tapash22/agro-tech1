<template>
  <div id="home">
    <Details />
    <Slider />
    <!-- <div class="container"> -->
      <div class="image">
        <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <h3>2</h3>
              <p>Days</p>
            </div>
          </div>
           <div class="col-md-4">
            <div class="box">
              <h3>2</h3>
              <p>Days</p>
            </div>
          </div>
           <div class="col-md-4">
            <div class="box">
              <h3>2</h3>
              <p>Days</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="items">
        <div
          class="col-md-3"
          v-for="(img, index) in images"
          :key="img"
          :index="index"
        >
          <a href="https://postimages.org/"
            ><h3>{{ img }}</h3></a
          >
        </div>
      </div>
      <div class="items">
        <div
          class="col-md-3"
          v-for="(img, index) in images"
          :key="img"
          :index="index"
        >
          <a href="https://postimages.org/"
            ><h3>{{ img }}</h3></a
          >
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Slider from "../../services/Slider.vue";
import Details from "../../services/Details.vue";

export default {
  name: "home",
  components: {
    Slider,
    Details,

  },
  data() {
    return {
      images: ["product1", "product2", "product3", "product4"],
    };
  },

  // firestore() {
  //   return {
  //     products: db.collection("products"),
  //   };
  // },
  // created() {
  //   db.collection("sliders")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         this.sliders.push(doc);
  //       });
  //     });
  // },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
  margin-top: 130px;
}
.image{
  width: 100%;
  height: 400px;
   background: url(../../assets/ee.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
.image .row{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;

}
.image .col-md-4{
  padding-top: 20px;
  margin: 0;
}
.image .col-md-4 .box{
  padding: 20px;
  margin: 80px;
  width: 200px;
  height: 150px;
  display: block;
  background: rgba(0, 0, 0, 0.479);
}
.image .box h3{
  font-size: 3.5rem;
  font-weight: 1500;
  text-align: center;
  color: #fff;
}
.image .box p{
  font-size: 1.5rem;
  font-weight: 500;
  color: blueviolet;
  text-align: right;
}
.items {
  position: relative;
  display: flex;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 100%;
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
  .container {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: rgb(236, 233, 233);
    margin-bottom: 20px;
    margin-top: 100px;
  }
  .row {
    width: 100%;
    height: 300px;
    position: relative;
    margin: 0;
    padding: 0;
  }
  .row .col-md-12 {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .items {
    position: relative;
    display: block;
    justify-content: center;
    background: #fff;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 5px;
  }
  .col-md-3 {
    width: 100%;
    height: 250px;
    background: green;
    overflow: hidden;
    transition: 0.5s ease;
    transform: translateY(0);
    border-radius: 10%;
  }
  .col-md-3:hover {
    transform: translateY(-5px);
  }
}
</style>
