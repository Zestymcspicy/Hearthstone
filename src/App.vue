<template>
  <div id="main">
    <HearthStoneHeader msg="Hearthstone"/>
    <router-view></router-view>
  </div>
</template>
<script>
  import Responsibilities from './components/Responsibilities';
  import HearthStoneHeader from './components/HearthStoneHeader';
  import FrontPage from './components/FrontPage';
  export default {
    components: {
      HearthStoneHeader,
      FrontPage,
      Responsibilities
    },
    // data() {
    //   return page.FrontPage = true
    // }
  }

</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  body{
    margin: 0;
  }

  #main {
    font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
    background-image: url("assets/erik-mclean-1132483-unsplash.jpg");
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: auto;
  }

  .page-content {
    padding: 2%;
    display: flex;
    flex-wrap: wrap;
    color: white;
    background-color: hsla(150, 15%, 5%, 0.76);
    margin: 2% 5%;
    font-size: 20px;
  }

  @media only screen and (max-width: 500px) {
    .page-content{
      margin: 2% 0;
    }

    body, html{
      width: 100%;
      overflow-x: hidden;
    }
  }
</style>
<!--photh cred Photo by Erik Mclean on Unsplash  -->
