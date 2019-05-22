<template>
  <div id="applications">

    <figure id="sunset">
      <img id="sunset-image" src="../assets/sunset.jpg" alt="sunset"/>
    </figure>
    <div id="dimbox">
				Applicants for admission to Hearthstone are interviewed at house meetings held from
				6 p.m. to 7 p.m. on Monday through Thursday evenings.&nbsp; In order to be interviewed,
				applicants must:
				<ul>
						<li>Not have used drugs or alcohol within 72 hours of the interview</li>
						<li>Be able to move in within 72 hours if accepted</li>
					</ul>
				It is advisable to:
				<ul>
						<li>Call first in order to determine availability</li>
						<li>Arrive between 5:00 and 5:30 on the designated day in order to have the opportunity
						to become more familiar with Hearthstone</li>
					</ul>
				<p> Applicants are interviewed on a first-come, first-served basis and no waiting list
						is maintained.&nbsp; If someone is accepted but does not move in within 72 hours,
						the opening is made available to others and he must re-interview.</p>
				<p> If Hearthstone is at its capacity when someone calls, he is encouraged to call back
						frequently as there is no way to predict when openings will become available.</p>
			</div>
    <router-view></router-view>
  </div>
</template>

<style>
#dimbox{
  margin: 5% 5% 5% 5%;
  background-color: rgba(208, 210, 197, 0.76);
  height: 100%;
  padding: 2%;
}

#sunset-image{
  border-radius: 2%;
}

#sunset{
  width: 40%;
}

#applications{
  display: flex;
}

@media only screen and (max-width: 740px) {
  #applications {
    display:run-in;
  }

  #sunset{
    border-radius: 3%;
    width: 95%;
  }

  #dimbox {
    border-radius: 7% 7% 7% 7%;
    position: absolute;
    width: 90%;
    height:auto;
  }
}
</style>
