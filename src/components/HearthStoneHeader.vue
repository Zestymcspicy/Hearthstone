<template>
  <div class="title">
    <div id="title-text">
      <h1>Hearthstone</h1>
      <h6>Men's Recovery in Lawrence, KS</h6>
      <Nav/>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue';
export default {
  components: {
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

h1 {
  width: 100%;
  margin: 1.1rem .1rem 0 0;
  font-family: Raleway, Helvetica, Arial, sans-serif;
}

h6 {
  width: 50%;
  margin: .37em 0 .4em 0;
}

#title-text{
  margin-left: 5%;
  display:flex;
  flex-wrap: wrap;
  width:auto;
  justify-content: flex-start;
}

.title {
  z-index: 1;
  width: 100%;
  position: sticky;
  top: 0px;
  color: #17caf0;
  font-size: 40px;
  display:flex;
  justify-content: flex-start;
  background-color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

@media only screen and (max-width: 740px) {
  Nav {
    width: 100%;
  }

  .title {
    font-size: 30px;
  }

  h6 {
    width: 100%;
  }
}


@media only screen and (max-width: 500px) {
  .title {
    font-size: 18px;
    position: fixed;
    top: 0;
  }

  #title-text{
    margin-left: 0;
  }
  h6{
    width: 70%;
  }
}
</style>
