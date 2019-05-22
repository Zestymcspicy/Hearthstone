<template>
  <div id="nav">
      <div v-on:click="toggle_menu()" id="hamburger">
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
<script>
export default {
  methods: {
    toggle_menu: function() {
      const menu = document.getElementById("nav-list");
      if(menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        // menu.style.display = "none";
      } else {
        // menu.style.display = "";
        menu.classList.add("show-menu");
      }
    }
  }
}

</script>


<style scoped>
  #nav{
    align-self: flex-end;
    margin: 0 0 .1em 0;
    display: flex;
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

  .router-link-active {
    color:red;
    pointer-events:none;
  }


  #nav-list {
    display: inline-block;
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
      background-color: white;
      width: 28vh;
      top: 60px;
      padding-top: 10%;
      transition: .25s ease;
      transform: translateX(100%);
    }


    .show-menu {
      display: block;
      transition: .25s ease;
      transform: translateX(-50%) !important;
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
      padding: 0 3px;
      cursor: pointer;
      background-color: #17caf0;
    }


    #hamburger:hover span{
      background-color: white;
      border-color: white;
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
