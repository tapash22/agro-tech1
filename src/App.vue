<template>
  <ResponsiveNavigation
    :nav-links="navLinks"
    :image-path="require('@/assets/logo.png')"
    background="#fff"
    link-color="#777"
    hoverBackground="#ddd"
  />
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
    >
      <router-view />
    </transition>
  </div>
  <Footer />
</template>

<script>
import ResponsiveNavigation from "@/services/ResponsiveNavigation";
import Footer from "@/services/Footer.vue";
export default {
  components: {
    ResponsiveNavigation,
    Footer,
  },
  data: () => ({
    navLinks: [
      {
        text: "Home",
        path: "/",
        icon: "fa fa-home",
      },
      {
        text: "About",
        path: "/about",
        icon: "fa fa-address-card",
      },
      {
        text: "Products",
        path: "/products",
        icon: "fa fa-product-hunt",
        children: [
          { text: "Products1", path: "/products", icon: "fa fa-product-hunt" },
          { text: "Products2", path: "/products", icon: "fa fa-product-hunt" },
          { text: "Products3", path: "/products", icon: "fa fa-product-hunt" },
        ],
      },
      {
        text: "Gallery",
        path: "/gallery",
        icon: "fa fa-eye",
      },
      {
        text: "Partners",
        path: "/partners",
        icon: "fa fa-users",
      },
      {
        text: "Login",
        path: "/login",
        icon: "fa fa-user",
      },
    ],
  }),
};
</script>

<style scoped>
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

#app {
  background: rgb(238, 234, 234);
}
#nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #42b983;
}
</style>