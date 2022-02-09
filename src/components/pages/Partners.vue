<template>
  <div class="partners">
    <div class="container">
      <h2>OUR PARTNERS</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="box card-1">
            <div class="image">
              <img src="../../assets/logo.png" />
            </div>
            <div class="box2">
              <h4>Partner name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, vero quod fuga minus, recusandae sequi provident
                consectetur quos quia nostrum libero aliquam ratione? Quidem
                delectus mollitia fuga amet ut maxime?
              </p>
              <a href="">Visit site</a>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="box card-2">
            <div class="image">
              <img src="../../assets/logo.png" />
            </div>
            <div class="box2">
              <h4>Partner name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, vero quod fuga minus, recusandae sequi provident
                consectetur quos quia nostrum libero aliquam ratione? Quidem
                delectus mollitia fuga amet ut maxime?
              </p>
              <a href="">Visit site</a>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="box card-3">
            <div class="image">
              <img src="../../assets/logo.png" />
            </div>
            <div class="box2">
              <h4>Partner name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, vero quod fuga minus, recusandae sequi provident
                consectetur quos quia nostrum libero aliquam ratione? Quidem
                delectus mollitia fuga amet ut maxime?
              </p>
              <a href="">Visit site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");

.partners {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.container {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 130px;
}
.container h2 {
  margin-bottom: 20px;
  background: -webkit-linear-gradient(#fff, lighten(#5c4084, 20%));
  /* -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; */
  text-align: center;
  font-weight: 700;
  font-size: 1.8rem;
  font-family: "Luxurious Roman", cursive;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
}
.col-md-12 {
  margin: 10px;
}
.box {
  display: flex;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}
.box .image {
  width: 40%;
  height: 200px;
  padding: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.box .image img {
  width: 350px;
  height: 150px;
  padding: 0;
  margin: 0;
}
.box .box2 {
  width: 60%;
  height: 100%;
  display: block;
  padding: 0;
  margin: 0;
}
.box .box2 h4 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Luxurious Roman", cursive;
  text-align: center;
}
.box .box2 p {
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "Luxurious Roman", cursive;
  text-align: justify;
  padding: 5px;
  margin: 0;
}
.box .box2 a {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Luxurious Roman", cursive;
  display: flex;
  justify-content: center;
  color: #000;
  text-decoration: none;
  padding: 10px;
  margin: 5px;
}
.box:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.card-1 {
  background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}

.card-2 {
  background-image: url(https://ionicframework.com/img/getting-started/components-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}

.card-3 {
  background-image: url(https://ionicframework.com/img/getting-started/theming-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}
</style>