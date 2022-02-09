<template>
  <div class="header">
    <nav class="fixed-top" :class="{ change_color: scrollPosition > 15 }">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" @click.prevent="onToggle" />
      </a>
      <ul class="navigation" v-if="mobile">
        <li v-for="pgs in pages" :key="pgs.text">
          <router-link class="link" :to="pgs.url">
            {{ pgs.text }}
          </router-link>
          <span v-if="pgs.child">
            <ul>
              <li v-for="i in pgs.child" :key="i.text">
                <router-link :to="i.url">
                  {{ i.text }}
                </router-link>
              </li>
            </ul>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  components: {},
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
          child: [
            {
              url: "poultry",
              text: "Poultry",
              child: [
                { url: "/", text: "Livertonic" },
                { url: "/", text: "Minerals" },
                { url: "/", text: "Aminoacid" },
                { url: "/", text: "Enzyme" },
              ],
            },
            {
              url: "ruminent",
              text: "Ruminent",
              child: [
                { url: "/", text: "Livertonic" },
                { url: "/", text: "Minerals" },
                { url: "/", text: "Aminoacid" },
                { url: "/", text: "Enzyme" },
              ],
            },
            {
              url: "aqua",
              text: "Aqua",
              child: [
                { url: "/", text: "Livertonic" },
                { url: "/", text: "Minerals" },
                { url: "/", text: "Aminoacid" },
                { url: "/", text: "Enzyme" },
              ],
            },
          ],
        },
        {
          url: "/gallery",
          text: "Gallery",
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
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap');

.change_color {
  background-color: rgba(255, 255, 255, 0.9);
  color: #fff;
}
.header{
  width: 100%;
  height:100%;
  padding: 0;
  margin:0;
  position: absolute;
}
.header nav{
  width:100%;
  height: 120px;
  padding:10px;
  margin:0;
  display: flex;
  justify-content: space-around;
  background:rgb(35, 2, 58);
  box-shadow: 0 0 10px #fff;
}
nav a{
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: right;
}
nav a img{
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 5px;
}
nav ul{
  width: 70%;
  padding:15px;
  margin:10px;
  display: flex;
  justify-content: right;
}
nav ul li{
  padding: 10px;
  margin: 5px;
  list-style:none;
}
nav ul li a{
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: 'Luxurious Roman', cursive;
  text-align: center;
  margin:0;
  padding: 5px;
  text-decoration: none;
  color:#fff;
  border-bottom: 3px none #fff;
}
nav ul li a:hover,
nav ul li a.router-link-exact-active {
  border-bottom: 2px solid #fff;
}
ul li:hover span {
  display: block;
}
 li span {
  display: none;
  position: absolute;
  padding: 0;
  margin-left:-20px;
  margin-top: -5px;
}
span ul {
  width: 100%;
  height:100%;
  padding: 0;
  margin:0;
  display: flex;
  flex-direction: column;
    background: #1b1b1b;
}
span ul li {
  width: 150px;
  height: 60px;
  padding: 0;
  margin:0;
  display: flex;
  justify-content: center;
}
span li a {
  text-decoration: none;
  color: #000;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  padding: 0;
  margin: 0;
}
span ul li a:hover,
span ul li a.router-link-exact-active {
  border-bottom: 2px none #fff;
}
span li:hover {
  background: rgba(0, 0, 0, 0.466);
}
@media screen and (max-width: 759px) {
  nav {
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
  ul li a:hover {
    color: #fff;
    border-bottom: 2px solid yellow;
  }
  ul li:hover span {
    display: block;
    color: #000;
  }

  span {
    width: 200px;
    height: 240px;
    position: relative;
    display: none;
    margin-left: -40px;
    margin-top: -100px;
    left: 200px;
  }
  span li {
    width: 150px;
    height: 40px;
    text-align: left;
    background: #fff;
    cursor: pointer;
    padding: 5px;
    list-style: none;
  }
  span li a {
    text-decoration: none;
    color: #000;
    font-size: 1.3rem;
    font-weight: 500;
  }
  span li:hover {
    border: 1px solid green;
  }
  span li a:hover {
    color: #000;
    border-bottom: 2px solid yellow;
  }
}
</style>