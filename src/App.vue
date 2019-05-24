<template>
  <div id="main">
    <HearthStoneHeader/>
    <router-view></router-view>
  </div>
</template>
<script>
  import HearthStoneHeader from './components/HearthStoneHeader';
  export default {
    components: {
      HearthStoneHeader,
    },
  }

</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  body{
    margin: 0;
  }

  /* HearthStoneHeader{
    position: sticky;
    top: 0px;
  } */

  .in-text-link{
    color: #17caf0;
  }

  .page-title{

    text-align: center;
    margin: 2vh 0;
    color: white;
    width: 100%;
  }

  #main {
    font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
    background-image: url("assets/erik-mclean-1132483-unsplash.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: auto;
  }

  .page-content {
    border-radius: 5%;
    padding: 3%;
    display: flex;
    flex-wrap: wrap;
    color: white;
    background-color: hsla(150, 15%, 5%, 0.76);
    margin: 3% 7%;
    font-size: 20px;
  }


  @media only screen and (max-width: 860px){
    .page-content {
      border-radius: 0;
    }
  }

  @media only screen and (max-width: 500px) {
    .page-content{
      margin: 2% 0;
    }

    .page-title{
      margin-top: 14vh;
    }
    body, html{
      width: 100%;
      overflow-x: hidden;
    }
  }
</style>
<!--photh cred Photo by Erik Mclean on Unsplash  -->
