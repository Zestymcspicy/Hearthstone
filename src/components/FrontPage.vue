<template>
  <div id="front-page">
  <!-- <div class="page-content" id="front-page"> -->
    <h1 class="page-title">About</h1>
    <div class="front-page-text" id="first-paragraph">
			Hearthstone is a residential facility located in Lawrence, Kansas dedicated to helping
			adult men serious about recovering from their addictions to alcohol, drugs or both.&nbsp;
			It was founded in 1982 by a group of six men in recovery with the intention of helping
			others achieve what they had accomplished.&nbsp; Since that time, hundreds of men
			from all walks of life, all races and multiple nationalities have made Hearthstone
			their home as part of their recovery journey.
    </div>
    <figure id="sunflower">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Sunflower_from_Silesia.JPG">
      <figcaption>
        By
        <a href="//commons.wikimedia.org/wiki/User:Pudelek" title="User:Pudelek">Pudelek</a> (Marcin Szala) - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=2794178">
          Link
        </a>
      </figcaption>
    </figure>
    <div class="front-page-text" id="second-paragraph">
      Hearthstone is supported by the rent paid by its residents as well as through outside
     contributions.&nbsp; It is a registered 501(3)(c) charitable organization.
    </div>
    <figure id="alcoholism">
      <img src="../assets/man-drinking-alcohol2.png" alt="alcoholism">
    </figure>
    <div class="front-page-text">
      <div id="third-paragraph">
			Hearthstone can accommodate up to ten residents at a time and it is governed by
			a non-resident Board of Directors drawn from the recovery community in Lawrence,
			some of whom are former residents themselves.&nbsp; Hearthstone has no affiliation
			with any other organization
      but residents are required to participate in a 12-step recovery program while
     in residence.&nbsp; Frequent meetings of the relevant organizations are held within
     easy walking distance of the facility.
   </div>
     <div id="fourth-paragraph">
			The current cost of residence at Hearthstone is $105 per week, split between $65
			for rent and $40 for a food fund which is administered by the residents.&nbsp; Residents
			are required to support themselves while in residence via meaningful work, but no
			money is required upon admission.&nbsp; More requirements for living at Hearthstone
			are shown on the <router-link class="in-text-link" to="responsibilities">RESPONSIBILITIES</router-link> page and the procedure for applying is
			outlined on the <router-link class="in-text-link" to="applications">APPLICATIONS</router-link> page.
    </div>
    <div></div>
    <router-view></router-view>
  </div>
</div>
</template>


<style scoped>
  .front-page-text{
    width: 95%;
    height: auto;
    /* testing */
    background-color: hsla(0, 0%, 100%, 0.85);
    padding: 2%;
    margin: 5%;
    font-size: 30px;
    align-self: center;
  }
  figure {
    align-self: center;
  }
  #front-page{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  #second-paragraph {

    /* width: 100%; */
    /* to here */
    margin-bottom: 10px;
  }
  #fourth-paragraph {
    margin-top: 10px;

  }

  img{
    width: 100%;
  }

  figcaption {
    font-size: 12px;
  }

  #sunflower {
    width: 24%;
    max-width: 200px;
    height: auto;
  }

  #alcoholism {
    width: 24%;
  }
  @media only screen and (max-width: 860px) {
    .front-page-text{
      width: 90%;
    }
    #front-page{
      margin: 2% 0;
    }
    #sunflower, #alcoholism{
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 700px) {
    
  }
</style>
