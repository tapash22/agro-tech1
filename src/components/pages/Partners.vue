<template>
  <div class="partners">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="icon">
            <i class="fa fa-adjust" aria-hidden="true"></i>
          </div>
        </div>
        <div class="col-md-9">
          <h4>Mission</h4>
          <p>
            To ensure a healthier life by producing the top-quality products one
            can trust in treatment of ailments
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="icon">
            <i class="fa fa-adjust" aria-hidden="true"></i>
          </div>
        </div>
        <div class="col-md-9">
          <h4>Vision</h4>
          <p>
            Become the pharmaceuticals of choice through consistent product
            quality, empowering people and satisfying stakeholders.
          </p>
        </div>
      </div>
      <div class="row2">
        <div class="col-md-12">
          <div class="icon">
            <i class="fa fa-adjust" aria-hidden="true"></i>
            <h4>Core Values</h4>
          </div>
        </div>
        <div class="col-md-12">
          <div class="box">
            <div class="row">
              <div class="col-md-4">
                <div class="card">
                  <h5>Farmers Centric</h5>
                  <p class="wrap">
                    We put highest priority in satisfying our farmers need . We
                    are proactive analyzing their needs so that we can address
                    their future needs & expectations.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <h5>Quality Focus</h5>
                  <p class="wrap">
                    We are committed to provide quality products and services to
                    our Farmers & stackholders .
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <h5>Drive for Results</h5>
                  <p class="wrap">
                    We are committed and focused to achieve specific and agreed
                    results that brings value to the organization.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <h5>Accountability</h5>
                  <p class="wrap">
                    We are accountable for providing contemporary, quality and
                    affordable products & service to our stakeholders
                    maintaining ethical & regulatory obligations.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <h5>Teamwork</h5>
                  <p class="wrap">
                    We move together to make our organization great/grand. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="partner">
        <partners-1></partners-1>
      </div>
    </div>
  </div>
</template>

<script>
import Partners1 from './Partners1.vue';
export default {
  components:{
    Partners1,
  },
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
    mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgb(238, 234, 234);
  margin-top: 100px;
}
.row {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 200px;
}
.col-md-3 {
  width: 40%;
  background: #fff;
  margin-bottom: 20px;
  padding: 20px;
}
.col-md-3 .icon {
  width: 100%;
  height: 150px;
  box-shadow: 1px 1px 3px #000;
  display: flex;
  justify-content: center;
}
.col-md-3 i {
  font-size: 4rem;
  font-weight: 900;
  margin-top: 50px;
}
.col-md-9 {
  width: 60%;
  background: #fff;
  margin-bottom: 20px;
}
h4 {
  padding-top: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
}
/* first row end */
.row2 {
  position: relative;
  width: 100%;
  height: 600px;
  background: #fff;
  margin: 0;
  padding: 0;
}
.row2 h4 {
  padding-top: 30px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
  margin: 5px;
}
.row2 .col-md-12 {
  position: relative;
  padding-top: 20px;
}
.row2 .col-md-12 .icon {
  width: 100%;
  height: 100px;
  border: 2px solid #000;
  background: rgb(4, 4, 56);
  display: flex;
  justify-content: center;
}
.row2 .col-md-12 .icon i {
  font-size: 5rem;
  font-weight: 900;
  color: #fff;
  padding: 5px;
}
.row2 .box {
  width: 100%;
  height: 100%;
}
.box .col-md-4 {
  width: 30%;
  height: 200px;
  display: block;
  justify-content: left;
  padding: 10px;
  margin: 10px;
}
.box .col-md-4 .card {
  width: 300px;
  height: 200px;
  padding: 20px;
}
.box .col-md-4 .card h5 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px;
}
.box .col-md-4 .card p {
  padding: 5px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
}
.partner{
  margin-bottom: 20px;
}
</style>