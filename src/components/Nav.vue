<template>
  <div id="nav">
      <div v-on:click="display_menu()" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="drop" id="nav-list">
        <li><router-link class="nav-item" to="/home">Home</router-link></li>
        <li><router-link class="nav-item" to="/responsibilities">Responsibilities</router-link></li>
        <li><router-link class="nav-item" to="/applications">Applications</router-link></li>
        <li><router-link class="nav-item" to="/contact">Contact/Directions</router-link></li>
      </ul>
  </div>
</template>



<style scoped>
  #nav{
    align-self: flex-end;
    margin: 0 0 .1em 0;
    display: flex;
    /* width: 100%; */
  }

  .nav-item{
    text-decoration: none;
    color: inherit;
    margin: 2px;
  }

  .nav-item:hover{
    background-color: #17caf0;
    cursor: pointer;
    color: black;
  }

  #nav-list {
    height: auto;
    text-align: center;
    margin: 0 0 0 30px;
    padding: 0;
  }


  li:not(:last-child):after {
    content: " | ";
  }

  li {
    display: inline-block;
    font-size: 16px;
    margin-left: 2px;
    height: 20px;
  }

  @media only screen and (max-width: 740px) {
    #nav-list {
      width: 100%;
    }
  }

  @media only screen and (max-width: 500px) {
    #nav-list {
      position: absolute;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      /* padding: 0; */
      right: -50%;
      background-color: white;
      width: 37%;
      top: 60px;
      padding-top: 10%;
    }
    
    li {
      display: block;
      height: 36px;
    }


    li:not(:last-child):after {
      content: "";
    }
    #nav{
      width: 50px;
    }

    #hamburger:hover{
      cursor: pointer;
      background-color: #17caf0;
      color: black;
    }

    #hamburger:hover span{
      background-color: black;
      border-color: black;
    }

    #hamburger {
      z-index: 1;
	    border-radius: 10%;
	    position: absolute;
	    right: 3%;
	    top: 40px;
	    transform: translateY(-50%);
      /* width: 40px; */
    }

    #hamburger span {
      border-radius: 25%;
      border: solid 2px #17caf0;
      width: 36px;
      margin: 4px 0;
      height: 2px;
      display: block;
      background-color: #17caf0;
    }
  }
</style>
