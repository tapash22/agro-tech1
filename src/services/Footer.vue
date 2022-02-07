<template>
  <div class="footer">
    <div class="row">
      <div class="col-md-4 text">
        <h3>We are</h3>
        <p>
          Agrotech Global BD Nutrition is a World Class Animal Health Care
          Solution provider committed to deal with a wide range of world
          renowned products to market inside the Country through its own
          Distribution Network.inside the Country through its own Distribution
          Network.inside the Country through its own Distribution Network.
        </p>
      </div>
      <div class="col-md-4 add">
        <h3>Get in touch</h3>
        <address>
          Shamol Chya House<br />
          Road No: 16, Holding No: 28, Rupnagor<br />
          Mirpur, Dhaka-1216, Bangladesh.
        </address>
        <address>
          <strong> Email :</strong> gvetpharma.gmail.com<br />
          <strong> Mobile No :</strong> +8801674345763
        </address>
      </div>
      <div class="col-md-4 link">
        <h3>Quick link</h3>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/partners">Partners</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
         <ul>
          <li>
            <a href="https://www.facebook.com/"
              ><i class="fa fa-facebook" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/"
              ><i class="fa fa-linkedin" aria-hidden="true"></i
            ></a>
          </li>
          <li><a href="https://www.linkedin.com/company/"
              ><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
    <div class="bottom">
        <p>All right reserved in &copy;UltraWave</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap');

.footer {
  width: 100%;
  height: 100%;
  background: #1b1b1b;
  padding: 0;
  margin: 0;
  position: relative;
}
.row {
  display: flex;
  justify-content: center;
  padding:10px;
  margin: 0;
  background: #1b1b1b;
}
.row .col-md-4 {
  width: 30%;
  height: 100%;
  padding: 10px;
  margin: 5px;
  display: block;
}
.col-md-4 h3 {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Luxurious Roman', cursive;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
}
.col-md-4 p {
  font-size: 1.1rem;
  font-weight: 400;
  font-family: 'Luxurious Roman', cursive;
  text-align: justify;
  padding: 10px;
  margin: 0;
  color: #fff;
}
.col-md-4 address{
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  font-family: 'Luxurious Roman', cursive;
  padding: 10px;
  margin: 5px;
  color: #fff;
}
.col-md-4 ul{
  padding: 5px;
  margin: 5px;
  display: flex;
}
ul li{
  list-style: none;
  padding: 5px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
 ul li a{
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Luxurious Roman', cursive;
  padding:0;
  margin:0;
  color: #fff;
}
.col-md-4 ul li a{
  text-decoration: none;
}
.col-md-4 ul li a i{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: blue;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;
}
.col-md-4 ul li a i:hover{
  background: #fff;
  color: blue;
}

.footer .bottom{
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px #fff;
}
.bottom p{
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Luxurious Roman', cursive;
  color: rgb(212, 212, 212);
}

@media only screen and (max-width: 767px) {
  p {
    text-align: left;
    padding: 20px;
  }
  .link li {
    padding: 2px;
    text-align: left;
  }
  .link a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 3px solid green;
    text-align: left;
  }
}
</style>