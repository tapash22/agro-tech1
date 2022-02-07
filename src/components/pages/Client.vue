<template>
  <div class="client">
    <ResponsiveNavigation />
    <div class="row">
      <router-view></router-view>
    </div>
    <Foot />
  </div>
</template>
<script>
import ResponsiveNavigation from "../../services/ResponsiveNavigation.vue";
import Foot from "../../services/Footer.vue";

export default {
  components: {
    ResponsiveNavigation,
    Foot,
  },
};
</script>

<style scoped>
.client{
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  position: relative;
}
.client .row{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
}
</style>
