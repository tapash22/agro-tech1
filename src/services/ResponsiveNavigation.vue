<template>
  <div class="container">
    <nav class="fixed-top" :style="{ background: background || '#333' }">
      <ul :style="{ background: background || '#333' }" ref="nav">
        <figure class="image-logo" @click="toggleNav">
          <img :src="imagePath" height="40px" width="40px" />
        </figure>
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          @mouseenter="
            $event.currentTarget.style.background = hoverBackground || '#999'
          "
          @mouseleave="
            $event.currentTarget.style.background = background || '#333'
          "
        >
          <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
            {{ link.text }}
            <i :class="link.icon" />
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- <Details /> -->
  </div>
</template>

<script>
// import Details from "./Details.vue";
export default {
  props: [
    "navLinks",
    "background",
    "linkColor",
    "hoverBackground",
    "imagePath",
  ],
  components: {
    // Details,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgb(238, 234, 234);
}

.change_color {
  background-color: red;
}
ul {
  display: flex;
  height: 100%;
  align-items: center;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  box-shadow: 2px 2px 2px #ccc;
}
figure {
  cursor: pointer;
  margin-left: 10px;
  margin-right: 500px;
}
img {
  width: 40px;
  height: 40px;
  margin-top: 10px;
}
a {
  text-decoration: none;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-size: 1.2rem;
  color: green;
}
i {
  margin-right: 10px;
  font-size: 1.2rem;
}
li {
  list-style-type: none;
  padding: 10px 20px;
}

@media screen and (max-width: 759px) {
  ul {
    position: absolute;
    width: 300px;
    flex-direction: column;
    left: -300px;
    transition: 300ms ease all;
    top: 60px;
  }
  ul.active {
    left: 0px;
  }
  figure {
    position: fixed;
    z-index: 1;
    top: 10px;
    left: 2px;
  }
  li {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  a {
    flex-direction: row;
    margin-left: 20px;
    justify-content: space-between;
    margin-right: 13px;
  }
}
</style>