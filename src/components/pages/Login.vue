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
        .then(()=>{
          this.$router.replace('/admin/dashboard');
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
.row {
  height: 450px;
  justify-content: center;
  margin-bottom: 50px;
}
.col-md-6 {
  width: 600px;
  height: 400px;
  margin-top: 100px;
  box-shadow: 5px 5px 5px rgb(62, 62, 141);
  z-index: 1;
  background: #fff;
  background-image: url("../../assets/login.jpg");
  background-position: center;
  background-size: cover;
}
h2 {
  padding-top: 40px;
  color: #000;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
}
.msg {
  justify-content: center;
  padding: 10px;
}
label {
  font-size: 1.2rem;
  font-weight: 500;
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