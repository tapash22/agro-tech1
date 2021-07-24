<template>
  <div class="vueGallery">
    <div
      class="activePhoto"
      :style="'background-image: url(' + photos[activePhoto] + ');'"
    >
      <button
        type="button"
        aria-label="Previous Photo"
        class="previous"
        @click="previousPhoto()"
      >
        <i class="fa fa-chevron-circle-left"></i>
      </button>
      <button
        type="button"
        aria-label="Next Photo "
        class="next"
        @click="nextPhoto()"
      >
        <i class="fa fa-chevron-circle-right"></i>
      </button>
    </div>
    <div class="thumbnails">
      <div
        v-for="(photo, index) in photos"
        :src="photo"
        :key="index"
        @click="activePhoto = index"
        :class="{ active: activePhoto == index }"
        :style="'background-image: url(' + photo + ')'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
     props: ['photos'],
  data: function () {
    return {
      activePhoto: 0,
    };
  },
    mounted () {
    this.activePhoto = 0
    document.addEventListener("keydown", (event) => {
      if (event.which == 37)
        this.previousPhoto()
      if (event.which == 39)
        this.nextPhoto()
    })
  },

   methods: {
    nextPhoto () {
      this.activePhoto = ( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
    },
    previousPhoto () {
      this.activePhoto = ( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
    }
  }
}
</script>
<style scoped>
.vueGallery .activePhoto {
  width: 100%;
  margin-bottom: 5px;
  padding-bottom: 65%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid #fff;
  position: relative;
  z-index: 1;
}

.vueGallery button {
  border: none;
  background-color: transparent;
  font-size: 32px;
  color: #fff;
  opacity: 0.8;
  position: absolute;
  outline: none;
  height: 100%;
}

button:hover {
  opacity: 1;
}
button.previous {
  padding: 0 1em 0 0.7em;
  left: 0;
  background: -moz-linear-gradient(
    left,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000', endColorstr='#00000000',GradientType=1 );
}
button.next {
  padding: 0 0.7em 0 1em;
  right: 0;
  background: -moz-linear-gradient(
    left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#80000000',GradientType=1 );
}

.thumbnails {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 5px;
}

.thumbnails div {
  width: 100%;
  border: 2px solid #fff;
  outline: 2px solid #fff;
  cursor: pointer;
  padding-bottom: 65%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
}

div:hover {
  opacity: 1;
}
div.active {
  outline-color: #5c4084;
  opacity: 1;
}
</style>