<template>
  <div class="login">
    <div class="row my-5">
      <div class="col-md-6">
        <h2>Login Form</h2>
        <hr />
        <form class="msg">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <div class="mt-3">
            <button class="btn btn-lg btn-primary" @click.prevent="onLogin">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "../../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    onLogin() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("/admin/dashboard");
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap');

.login{
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
    /* background: rgba(63, 62, 62, 0.952); */
}
.login .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.col-md-6 {
  width: 50%;
  height: 750px;
  margin-top: 80px;
  box-shadow: 0 0 10px blue;
  z-index: 1;
  background: #fff;
  background-image: url("../../assets/login.jpg");
  background-position: center;
  background-size: cover;
}
h2 {
  margin-top: 400px;
  color: #000;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 900;
  font-family: 'Luxurious Roman', cursive;
  text-transform: uppercase;
}
.msg {
  justify-content: center;
  padding: 10px;
}
label {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Luxurious Roman', cursive;
  padding: 5px;
  margin: 0;
}
.error {
  color: red;
}

@media only screen and (max-width: 767px) {
  .row {
    background: #fff;
    height: 350px;
  }
  .col-md-6 {
    width: 300px;
    height: 300px;
    margin-top: 130px;
  }
  h2 {
    padding: 20px;
    font-size: 1rem;
    font-weight: 500;
  }
  .msg {
    margin-top: -50px;
  }
  label {
    color: #fff;
  }
}
</style>