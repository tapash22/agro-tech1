<template>
  <div class="about mt-4">
    <h2>About Us</h2>
 
      <div class="row my-2">
        <div class="col-md-2">
          <img src="../../assets/logo.png" />
        </div>

        <div class="col-md-10">
          <div class="box">
            <h3>Mission</h3>
          </div>
          <div class="text">
            <p class="wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ratione dicta veritatis ab cupiditate consequatur quis modi harum
              at quos reiciendis, illum optio ipsam pariatur inventore nostrum
              nobis in tempora.
            </p>
            <hr />
          </div>
        </div>
      </div>
    <div class="row my-2">
      <div class="col-md-2">
        <transition name="img">
          <img src="../../assets/logo.png" />
        </transition>
      </div>
      <div class="col-md-10">
        <div class="box">
          <transition name="txt">
            <h3>Mission</h3>
          </transition>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
          <hr />
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>
      <div class="col-md-10">
        <div class="box">
          <h3>Mission</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
          <hr />
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>
      <div class="col-md-10">
        <div class="box">
          <h3>Mission</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
          <hr />
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>
      <div class="col-md-10">
        <div class="box">
          <h3>Vission</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
          <hr />
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>
      <div class="col-md-10">
        <div class="box">
          <h3>Core Value</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
          <hr />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mx-4">
        <div class="box2">
          <h3>Quality policy</h3>
        </div>
        <div class="text mx-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
          debitis pariatur dignissimos! Perferendis exercitationem ut tempora
          blanditiis nesciunt rerum, fugiat doloribus vel ad modi, odit libero
          porro dolore! Perferendis.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quidem et debitis pariatur dignissimos! Perferendis
          exercitationem ut tempora blanditiis nesciunt rerum, fugiat doloribus
          vel ad modi, odit libero porro dolore! Perferendis.
        </div>
      </div>
    </div>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInUp"
    >
      <contact></contact>
    </transition>
  </div>
</template>
<script>
import Contact from "./Contact.vue";
export default {
  components: {
    Contact,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
h2 {
  margin-top: 80px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
}
.col-md-2 img {
  width: 150px;
  height: 120px;
  margin-top: -20px;
}
.box {
  position: relative;
  width: 150px;
  background: green;
  box-shadow: 5px 5px 5px grey;
}
.box2 {
  position: relative;
  width: 200px;
  background: green;
  box-shadow: 5px 5px 5px grey;
}
h3 {
  color: #fff;
  padding: 5px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
}

@media only screen and (max-width: 767px) {
  h2 {
    margin-bottom: 30px;
  }
  .box {
    margin-left: 35%;
  }
  .box2 {
    margin-left: 30%;
  }
}
</style>