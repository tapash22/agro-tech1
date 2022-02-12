<template>
  <div id="home">
    <Details />
    <Slider />
    <!-- <div class="container"> -->

    <div class="items">
      <h2>WE PROVIDE</h2>
      <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <a href="product.url">
            <div class="card">
              <div class="image">
                <img :src="product.image" />
              </div>
              <p>{{ product.name }}</p>
            </div>
          </a>
        </div>
      </div>
      </div>
    </div>
    <div class="image">
      <h2>OUR PROMISE</h2>
      <div class="container">
        <div class="row2">
          <div class="col-md-4">
            <div class="box">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis libero nulla sit numquam, harum cum, facere aliquid
                asperiores excepturi doloremque necessitatibus delectus dicta
                explicabo natus deleniti, porro autem quasi iure!
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis libero nulla sit numquam, harum cum, facere aliquid
                asperiores excepturi doloremque necessitatibus delectus dicta
                explicabo natus deleniti, porro autem quasi iure!
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis libero nulla sit numquam, harum cum, facere aliquid
                asperiores excepturi doloremque necessitatibus delectus dicta
                explicabo natus deleniti, porro autem quasi iure!
              </p>
            </div>
          </div>
        </div>
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
      products: [
        {
          id: 1,
          image: require("../../assets/p1.png"),
          name: "Poultry",
          url: "/poultry",
        },
        {
          id: 2,
          image: require("../../assets/c1.png"),
          name: "Ruminent",
          url: "/ruminent",
        },
        {
          id: 3,
          image: require("../../assets/a1.png"),
          name: "Aqua",
          url: "/aqua",
        },
      ],
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
.home {
  width: 100%;
  height: 100%;
  margin-top: 130px;
  padding: 0;
}
.home .items {
  background: #fff;
  width: 100%;
  height: 100%;
}
 h2{
  font-size:1.5rem;
  font-weight: 900;
  text-align: center;
  font-family: 'Luxurious Roman', cursive;
  padding: 10px;
  /* display: flex;
  justify-content: center; */
}
.items .row{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.items .row .col-md-3 {
  width: 33%;
  height: 100%;
  padding: 10px;
  margin:0
}
.items .row .col-md-3 a{
  text-decoration:none;
}
.items .row .col-md-3 a .card{
  width: 100%;
  height: 100%;
  padding:0;
  margin:0;
    background:rgb(35, 2, 58);
}
.items .row .col-md-3 .card .image{
  width: 350px;
  height:280px;
  padding: 0;
  margin: 0;
  display:flex;
  justify-content: center;
  overflow: hidden;

}
.items .row .col-md-3 .card .image img{
  width:100%;
  height:100%;
    transform:scale(1);
  transition:0.5s transform ease-out;
}
.items .row .col-md-3 .card .image img:hover{
  transform:scale(1.1);
  transition:0.3s transform ease-out;
}
.items .row .col-md-3 .card p{
  width: 100%;
  height:50px;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding: 5px;
  margin: 0;
  color:#fff;
}

/* .col-md-3:hover {
  transform: translateY(-20px);
} */

.home .image {
  width: 100%;
  height: 300px;
  background: url(../../assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.image .row2 {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.image .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 10px;
  margin-top: 20px;
}
.image .col-md-4 .box {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.image .box p {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: "Luxurious Roman", cursive;
  color: #000;
  text-align: justify;
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
