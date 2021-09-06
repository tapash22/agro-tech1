<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 text">
          <h3>We <strong>are</strong></h3>
          <p>
            Agrotech Global BD Nutrition is a World Class Animal Health Care
            Solution provider committed to deal with a wide range of world
            renowned products to market inside the Country through its own
            Distribution Network.inside the Country through its own Distribution
            Network.inside the Country through its own Distribution Network.
          </p>
        </div>
        <div class="col-md-4 add">
          <h3>Get in <strong>touch</strong></h3>
          <address>
            Shamol Chya House<br />
            Road No: 16, Holding No: 28, Rupnagor<br />
            Mirpur, Dhaka-1216, Bangladesh.
          </address>
          <address>
            <strong> Email :</strong> gvetpharma.gmail.com<br />
            <strong> Phone :</strong> +8801674345763
          </address>
          <!-- <div style="width: 100px; height: 70px;margin-left:80%;">
            <img style="width:100%;height:100%;" src="../assets/1.jpg" />
          </div> -->
        </div>
           <div class="col-md-4 link">
          <h3>Quick <strong>link</strong></h3>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/photos">Gallery</router-link></li>
            <li><router-link to="/partners">Partners</router-link></li>
            <li><router-link to="/contact">Login</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="col-md-8">
          <p>All right reserved in &copy;UltraWave</p>
        </div>
        <div class="col-md-4">
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
            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #1b1b1b;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  padding: 0;
}
.row {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
  background: #1b1b1b;
}
.row .col-md-4 {
  text-align: center;
  padding: 10px;
}
h3 {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
strong {
  font-size: 22px;
  font-weight: 500;
}
p {
  text-align: left;
}
ul li {
  list-style: none;
}
ul li a {
  color: #fff;
  text-decoration: none;
}
.link {
  text-align: center;
}

.link li {
  padding: 2px;
  text-align: center;
}
.link a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 3px solid green;
}
.add address {
  text-align: left;
  padding: 0;
  margin-left: 50px;
}
.add strong {
  font-size: 18px;
  font-weight: 500;
}
.bottom {
  background: #000;
  opacity: 0.7;
  padding-top: 10px;
  padding: 0;
}
.bottom .container {
  padding: 0;
  display: flex;
  justify-content: space-around;
  background: #000;
}

.bottom .col-md-8 p {
  padding-top: 10px;
  text-align: center;
}

.bottom .col-md-4 ul {
  display: flex;
  float: right;

  padding: 10px;
}
.bottom .col-md-4 li i {
  font-size: 1.5rem;
  font-weight: 500;
  padding-right: 20px;
}
.bottom .col-md-4 li i:hover {
  color: cyan;
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