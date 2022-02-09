<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <router-link :to="product.url">
            <div class="card">
              <div class="image">
                <img :src="product.img" />
              </div>
              <p>{{ product.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Poultry",
          url: "/poultry",
          img: require("../../assets/logo.png"),
        },
        {
          id: 2,
          name: "Poultry",
          url: "/poultry",
          img: require("../../assets/logo.png"),
        },
        {
          id: 3,
          name: "Poultry",
          url: "/poultry",
          img: require("../../assets/logo.png"),
        },
      ],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.container {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 150px;
}
h2 {
  margin-top: 60px;
  color: rgb(45, 206, 131);
  text-align: center;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
}
.row {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.row .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.col-md-4 a {
  text-decoration: none;
  padding: 0;
  margin: 0;
}
.col-md-4 a .card {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
  display: block;
}
.card .image {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.card .image img {
  width: 100%;
  height: 100%;
}
.card p {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Luxurious Roman", cursive;
  text-align: center;
  /* display: flex;
  justify-content: center; */
  color: #000;
  padding: 10px;
  margin: 0;
}
</style>