<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="pdt">
            <div class="row">
              <div class="col-md-6" v-for="product in products" :key="product.id">
                <div class="card">
                  <img :src="product.data().image" />
                  <p>{{ product.data().product_name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p>Select any product for detail</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  data() {
    return {
      products: [],
       product: {
        product_name: "",
        company_name: "",
        pet_name: "",
        description: "",
        image:"",
      },
    };
  },
    created() {
          db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc);
          });
        });
    },

  mounted() {
    window.scrollTo(0, 0);
  },
  // firestore() {
  //   return {
  //     products: db.collection("products"),
  //   };
  // },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.container {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 100px;
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
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.col-md-8 {
  width: 60%;
  background: #fff;
  margin-bottom: 20px;
}
.pdt .row {
  width: 100%;
  position: inherit;
  justify-content: space-around;
}
.pdt .row .col-md-6 {
  width: 40%;
  height: 200px;
  padding: 10px;
  margin: 5px;
}
.pdt .row .col-md-6 img {
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: 0.8s ease;
  cursor: pointer;
}
.pdt .row .col-md-6 img:hover {
  transform: scale(1.1);
}

.col-md-4 {
  width: 40%;
  background: #fff;
  margin-bottom: 20px;
}
.col-md-4 p {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px;
  text-align: center;
  margin-top: 40%;
}
</style>