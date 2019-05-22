<template>
  <div id="contact">
    <h1 class="page-title">Contact/Directions</h1>
    <div id="map-container"></div>
      <Gmap/>
    <div id="contact-info"></div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Gmap from "./Gmap.vue";
  export default {
    components: {
      Gmap
    }
  }
</script>
<style>
  #map-container{
    width: 30vw;
    margin: 10% 0 0 15%;
  }
</style>
