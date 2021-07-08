<template>
  <div class="admin">
    <div class="header">
      <div class="card">
        <div class="icon">
          <i class="fa fa-user-o" aria-hidden="true"></i>
        </div>
        <address>
          MD.Admin
          <span>AgroGlobalBd</span>
        </address>
      </div>
      <ul>
        <li><a href="#">USER</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Add event</a></li>
      </ul>
    </div>
    <div class="sub-header">
      <div class="row">
        <div class="col-md-6 form">
          <h3>Add User</h3>
          <form>
            <div class="form-group">
              <label>User Email</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>User Password</label>
              <input type="password" class="form-control" />
            </div>
            <div class="my-3">
              <button class="btn btn-primary" type="submit">Add User</button>
            </div>
          </form>
        </div>
        <div class="col-md-6 details">
          <h3>User detail</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h3>User List</h3>
          <ul></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-around;
}
.header {
  padding-top: 80px;
  width: 250px;
  height: 100%;
  background: rgb(8, 1, 24);
  display: flex;
  flex-direction: column;
}
.card {
  width: 200px;
  height: 250px;
  background: #fff;
  padding: 15px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
}
.card .icon {
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgb(8, 1, 24);
  padding: 10px;
}
.icon i {
  font-size: 6rem;
  font-weight: 900;
  color: #fff;
  padding: 10px;
}
address {
  padding-top: 10px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: #000;
}
span {
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: 300;
  color: #000;
  text-transform: uppercase;
}
ul {
  margin-top: 20px;
  padding: 0;
}
ul li {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  padding: 10px;
}
ul li a {
  text-decoration: none;
  padding: 5px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}
ul li:hover {
  box-shadow: 1px 1px 2px #fff;
}
.sub-header {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgb(226, 223, 223);
  padding-top: 50px;
}

.sub-header .row {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.sub-header .form {
  width: 48%;
  height: 300px;
  padding: 20px;
  justify-content: center;
  background: #fff;
  margin: 0 5px;
}
.sub-header .form h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  padding: 10px;
  text-align: center;
}
.sub-header .form label {
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  padding: 5px;
}
.sub-header .details {
  width: 48%;
  height: 300px;
  display: flex;
  justify-content: center;
  background: #fff;
  margin: 0 5px;
}
.sub-header .details h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;

}
.sub-header .col-md-12{
  display: flex;
  justify-content: center;
  width: 96%;
  height: 100%;
  background: #fff;
}
.sub-header .col-md-12 h3{
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  border-bottom: 3px solid rgb(72, 9, 221);
}
</style>