<template>
  <div class="gmap">
    <div id="map"></div>
  </div>
</template>

<script>
  export default{
    name: 'gmap',
    mounted: function () {
    const element = document.getElementById("map")
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(51.501527,-0.1921837)
    }
    const map = new google.maps.Map(element, options);
  }
  }
</script> 
<style>
  #map{
    width: 30vw;
    height: 75vh;
    background: gray;
  }
</style>
