<template>
  <div class="partners">
    <div class="row mt-4">
      <h2>Partners</h2>
        <div
          class="col-md-2"
          v-for="(img, index) in images"
          :key="img"
          :index="index"
        >
          <img :src="img" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://i.postimg.cc/L64F1bQj/partner1.jpg",
        "https://i.postimg.cc/25ZsYR3N/partner2.jpg",
        "https://i.postimg.cc/kGnzW2s7/partner3.jpg",
        "https://i.postimg.cc/MHCTqXd9/flow-min-3.jpg",
        "https://i.postimg.cc/xTm8gy1h/OIP.jpg",
        "https://i.postimg.cc/Kc6BZYkX/Header-Webpage-1920x903-1.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.partners {
  background-image: url("../../assets/product.jpg");
  background-position: center;
  background-size: cover;
  padding-bottom: 50px;
}
.row {
  text-align: center;
  justify-content: center;
}
h2 {
  margin-top: 50px;
  color: rgb(45, 206, 131);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.col-md-2 {
  justify-content: center;
}
img {
  width: 180px;
  height: 100px;
  background-position: center;
  background-size: cover;
  border: 1px solid #000;
  transition: 0.3s all;
  filter: brightness(50%);
}
img:hover {
  filter: brightness(100%);
}

@media only screen and (max-width: 767px) {
  .col-md-2 {
    margin: 10px 10px;
  }
}
</style>