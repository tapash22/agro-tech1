<template>
  <div class="gallery">
    <h2>hall of agrotech</h2>

    <div class="container">
      <vue-gallery :photos="photos"></vue-gallery>
    </div>
  </div>
</template>

<script>
import vueGallery from "../../services/vueGallery.vue";
export default {
  components: {
    vueGallery,
  },
  data() {
    return {
      photos: [
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-01-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-02-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-03-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-04-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-05-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-06-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-07-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-08-min.jpg",
      ],
    };
  },
  mounted () {
  window.scrollTo(0, 0);
},
};
</script>
<style scoped>
.gallery {
  padding-top: 10px;
  padding-bottom: 50px;
}

h2 {
  margin-top: 110px;
  margin-bottom: 20px;
  background: -webkit-linear-gradient(#fff, lighten(#5c4084, 20%));
  /* -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; */
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
}
.container {
  background-color: #fff;
  padding: 6px;
  border-radius: 8px;
  max-width: 800px;
  box-shadow: 0 5px 8px #0000007a;
}
</style>