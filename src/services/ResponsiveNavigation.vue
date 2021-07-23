<template>
  <div class="header">
    <nav class="fixed-top" :class="{ change_color: scrollPosition > 15 }">
      <a class="navbar-brand" href="#">
        <img src="../assets/agro.png" @click.prevent="onToggle" />
      </a>
      <ul class="navigation" v-if="mobile">
        <li v-for="pgs in pages" :key="pgs.text">
          <router-link class="link" :to="pgs.url">
            {{ pgs.text }}
          </router-link>
          <!-- <span v-if="pgs.child">
            <ul>
              <li v-for="i in pgs.child" :key="i.text">
                <router-link :to="i.url">
                  {{ i.text }}
                </router-link>
              </li>
            </ul>
          </span> -->
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      scrollPosition: null,
      mobile: true,
      child: true,
      pages: [
        {
          url: "/home",
          text: "Home",
        },
        {
          url: "/about",
          text: "About",
        },
        {
          url: "/products",
          text: "Products",
          // child: [
          //   {
          //     url: "poultry",
          //     text: "Poultry",
          //   },
          //   {
          //     url: "ruminent",
          //     text: "Ruminent",
          //   },
          //   {
          //     url: "aqua",
          //     text: "AQua",
          //   },
          //     {
          //     url: "petanimal",
          //     text: "Pet-Animal",
          //   },
          //   {
          //     url: "vetClinic",
          //     text: "Vet Clinic",
          //   },
          //    {
          //     url: "others",
          //     text: "Others",
          //   },
          // ],
        },
        {
          url: "/gallery",
          text: "Gallary",
        },
        {
          url: "/partners",
          text: "Partners",
        },
        {
          url: "/login",
          text: "Login",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    onToggle() {
      this.mobile = !this.mobile;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
.change_color {
  background-color: rgba(255, 255, 255, 0.9);
  color: #fff;
}
.header {
  width: 100%;
  padding: 0;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  box-shadow: 2px 2px 3px green;
  margin: 0;
  padding: 0;
}
.navbar-brand {
  width: 300px;
  height: 100px;
}
img {
  width: 100%;
  height: 100%;
  padding: 5px;
 filter: saturate(100%);
}

nav > ul {
  display: flex;
  right: 0;
}

nav > ul > li {
  display: block;
  list-style: none;
  height: 100px;
  padding-top: 30px;
}

nav > ul > li > a {
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: #000;
  margin: 15px;
}
ul li a:hover{
    color: green;
    border-bottom: 2px solid yellow;
}
ul li:hover span{
    display: block;
}
span{
    width: 150px;
    height: 240px;
    position: absolute;
    top: 100px;
    display: none;
    z-index: 1;
    background: rgb(231, 231, 231);
    
}
span ul{
  padding:0;
  margin: 0;
}
span li{
    width: 150px;
    height: 40px;
    text-align: left;
   background: rgb(231, 231, 231);
    cursor: pointer;
    padding: 5px;
    list-style: none;
}
span li a{
  text-decoration: none;
  color: #000;
  font-size: 1.3rem;
  font-weight: 500;
}
span li:hover{
   border: 1px solid green;
}
@media screen and (max-width: 759px) {
  nav {
    margin-top: 100px;
    background: #000;
  }
  .navbar-brand {
    position: fixed;
    width: 200px;
    height: 100px;
    border: 1px solid #2000;
    margin-left: 10px;
  }
  nav > ul {
    position: absolute;
    left: 0;
    width: 200px;
    height: 40vh;
    flex-direction: column;
    transition: 300ms ease all;
    top: 100px;
    background: green;
    transition: all 0.5s;
  }

  nav > ul > li {
    text-align: center;
    list-style: none;
    width: 200px;
    height: 40px;
    margin-left: -30px;
    padding: 5px;
  }
  ul li a:hover{
    color: #fff;
    border-bottom: 2px solid yellow;
}
  ul li:hover span{
    display: block;
    color: #000;
}

  span{
    width: 200px;
    height: 240px;
    position: relative;
    display: none;
    margin-left:-40px;
    margin-top: -100px;
     left: 200px;
}
span li{
    width: 150px;
    height: 40px;
    text-align: left;
    background: #fff;
    cursor: pointer;
    padding: 5px;
    list-style: none;
}
span li a{
  text-decoration: none;
  color: #000;
  font-size: 1.3rem;
  font-weight: 500;
}
span li:hover{
   border: 1px solid green;
}
  span li a:hover{
    color: #000;
    border-bottom: 2px solid yellow;
}
}
</style>