<template>
  <div class="gmap">
    <div id="map">
      <iframe  frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsedOtkNvv4cRwlcGbRXm_6o&key=AIzaSyB63D2az3Guib3VGk7Auoie1fyG3lY1SzQ" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
</script>
<style>
  iframe{
    width: 100%;
    height: 100%;
  }

  #map{
    width: 30vw;
    height: 75vh;
  }

  @media only screen and (max-width: 900px) {
    #map{
      width: 100%;
      height: 60vh;
    }
  }
</style>
