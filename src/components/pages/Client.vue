<template>
  <div class="home">
    <ResponsiveNavigation/>
    <div class="row">
      <div class="container">
      <router-view></router-view>
      </div>
    </div>
    <Foot />
  </div>
</template>
<script>

import ResponsiveNavigation from '../../services/ResponsiveNavigation.vue';
import Foot from '../../services/Footer.vue';

export default {
  components:{
    ResponsiveNavigation,
    Foot,
  }
}
</script>
