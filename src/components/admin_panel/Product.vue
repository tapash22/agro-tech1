<template>
  <div class="product">
    <div class="row">
      <div class="col-md-12">
        <h3>Upload product</h3>
        <form>
          <div class="form-group">
            <label>Product Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Event Name .."
              v-model="product.product_name"
            />
          </div>
          <div class="form-group">
            <label>Company Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Event Name .."
              v-model="product.company_name"
            />
          </div>
          <div class="form-group">
            <label>For</label>
            <input
              class="form-control"
              type="text"
              placeholder="Event Name .."
              v-model="product.pet_name"
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              class="form-control"
              v-model="product.description"
            ></textarea>
          </div>
          <div class="form-group my-4 upload">
            <label>Upload Image</label>
            <input type="file" />
          </div>
          <div class="btn">
            <button class="btn btn-primary" @click.prevent="saveData">
              Add Product
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-12">
        <h3>Product List</h3>
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Company name</th>
              <th>Pet Name</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.name">
              <td>{{ product.product_name }}</td>
              <td>{{ product.company_name }}</td>
              <td>{{ product.pet_name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.image }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  name: "product",
  data() {
    return {
      products: [],
      product: {
        product_name: "",
        company_name: "",
        pet_name: "",
        description: "",
        image: "",
      },
    };
  },

  // firestore() {
  //   return {
  //     products: fb.collection("products"),
  //   };
  // },
  methods: {

    readData() {
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.products.push(doc.data());
          });
        });
    },

    saveData() {
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.readData();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },

  },
  created() {
    this.readData();
  },
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
}
.row {
  display: flex;
  flex-direction: column;
}
.col-md-12 {
  padding: 10px;
}
form {
  width: 100%;
  height: 100%;
  border: 2px solid black;
  padding: 20px;
}
form label {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: left;
  padding: 20px;
}
.col-md-12 h3 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  padding: 10px;
}
</style>