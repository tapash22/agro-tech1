<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="pdt">
            <div class="row">
              <div class="col-md-6" v-for="pds in products" :key="pds.id">
                <div class="card">
                  <img :src="pds.img"/>
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
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          img: "https://i.postimg.cc/3ryHCSbC/a.jpg",
          price: "1000",
        },
        {
          id: 2,
          img: "https://i.postimg.cc/BvZr8MKF/b.jpg",
          price: "1000",
        },
        {
          id: 3,
          img: "https://i.postimg.cc/JhyQdXwg/c.jpg",
          price: "1000",
        },
        {
          id: 4,
          img: "https://i.postimg.cc/8cbdrBWF/d.jpg",
          price: "1000",
        },
        {
          id: 5,
          img: "https://i.postimg.cc/pX2JM4bK/e.jpg",
          price: "1000",
        },
        {
          id: 6,
          img: "https://i.postimg.cc/NjF85X0M/f.jpg",
          price: "1000",
        },
        {
          id: 7,
          img: "https://i.postimg.cc/RF5wsbL6/g.jpg",
          price: "1000",
        },
        {
          id: 8,
          img: "https://i.postimg.cc/QNqcmm9C/h.jpg",
          price: "1000",
        },
        {
          id: 9,
          img: "https://i.postimg.cc/xTTM4mMR/i.jpg",
          price: "1000",
        },
        {
          id: 10,
          img: "https://i.postimg.cc/BbhL0hHC/k.jpg",
          price: "1000",
        },
        {
          id: 11,
          img: "https://i.postimg.cc/3ryHCSbC/a.jpg",
          price: "1000",
        },
        {
          id: 12,
          img: "https://i.postimg.cc/3ryHCSbC/a.jpg",
          price: "1000",
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
  background: rgb(238, 234, 234);
  padding-top: 80px;
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
.pdt .row{
  width: 100%;
  position:inherit;
  justify-content: space-around;
}
.pdt .row .col-md-6{
  width: 40%;
  height: 200px;
  padding: 10px;
  margin: 5px;
 
}
.pdt .row .col-md-6 img{
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: 0.8s ease;
  cursor: pointer;
}
.pdt .row .col-md-6 img:hover{
  transform: scale(1.1);
}

.col-md-4 {
  width: 40%;
  background: #fff;
  margin-bottom: 20px;
}
.col-md-4 p{
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px;
  text-align: center;
  margin-top: 40%;
}
</style>