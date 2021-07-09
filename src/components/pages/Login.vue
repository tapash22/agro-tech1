<template>
  <div class="login">
    <div class="row my-5">
      <div class="col-md-6">
        <h2>Login Form</h2>
        <hr />
        <form @submit.prevent="seneMessage" class="msg">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="user_email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              v-model="user_password"
            />
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-lg btn-primary" @click.prevent="onClick">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
    window.scrollTo(0, 0);
  },
  methods:{
    onClick(){
      this.$router.push('/admin');
    }
  }
}
</script>

<style scoped>
.login{
    background-image: url('../../assets/login.jpg');
  background-position: center;
  background-size: cover;

}

.row {
  height: 450px;
  justify-content: center;
  margin-bottom: 50px;
}
.col-md-6 {
  width: 600px;
  height: 350px;
  margin-top: 60px;
  box-shadow: 5px 5px 5px rgb(62, 62, 141);
  z-index: 1;
  background: #fff;
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

@media only screen and (max-width: 767px) {
  .row {
    background: rgb(5, 5, 78);
  }
  .col-md-6 {
    width: 300px;
    height: 300px;
    margin-top: 50px;
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