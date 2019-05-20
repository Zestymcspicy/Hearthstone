<template>
  <div class="page-content" id="responsibilities-page">
    <div>
			Hearthstone is a facility that provides a structured setting for men wishing to
			begin a program of recovery from drug and/or alcohol addiction.&nbsp; As such, although
			it is not a treatment facility, it does have a series of rules and procedures that
			must be followed while in residence.&nbsp; A sampling of these rules and procedures
			follows, although they may be changed or amended at any time by the Board of Directors.&nbsp;
			On a daily basis, they are interpreted and enforced by the House Director who is
			a member of the Board.
    </div>
    <ol>
      <li>
					Those admitted to Hearthstone are expected to remain in residence for a minimum
					of 90 days.&nbsp; However, it has been found that the most successful residents
					stay substantially longer.&nbsp; Under certain circumstances, a longer minimum stay
					may be required.
				</li>
      <li>
					A drug and alcohol screening will be conducted when an individual moves into Hearthstone
					and at random intervals thereafter.&nbsp; The penalty for failure of any screening
					is <b>immediate termination of residence</b>.&nbsp; Under these circumstances, an
					individual may never return to Hearthstone.
				</li>
      <li>
					From his initial move-in date through the third Sunday of residence, an individual
					is on <b>restriction</b>.&nbsp; When on restriction, the resident may leave the
					facility only to go to work, to look for work or to attend a 12-step meeting.&nbsp;
					In addition, a resident is placed on restriction for one week at any time his rent
					and food fund contribution are not current.&nbsp; Those payments are due each Sunday
					night to cover the week that follows.
				</li>
      <li>
					Mandatory meetings of the house members are held Monday through Thursday evenings
					at 6 p.m. and Sunday evening at 8 p.m.&nbsp; Weeknight curfews are 10:30 p.m.&nbsp;
					Therefore, it is not possible to hold second or third shift weeknight employment
					while in residence at Hearthstone.
				</li>
      <li>
					All residents are expected to support themselves through gainful employment while
					in residence as this is thought to be a necessary component of the recovery process.&nbsp;
					Residents need not be employed upon entering Hearthstone, but if they are not employed
					they must begin to seek employment immediately.
				</li>
      <li>
					All residents must participate in the upkeep of the facility through performing
					the chores assigned on a rotating basis each week.&nbsp; This includes the preparation
					of weeknight dinners for the residents.
				</li>
        <li>
					Each resident must attend a <u>minimum</u> of three 12-step meetings each week over and above the meetings held at Hearthstone.&nbsp;
					One meeting type is not a substitute for the other.
				</li>
    </ol>
    <div>
			This is but a summary of the major requirements for living at Hearthstone and it
			is not all inclusive.&nbsp; The requirements are not meant to be punitive in any
			way, but they have evolved over time as necessary to the recovery of residents and
			the efficient operation of the facility.&nbsp; The House Director can provide clarification
			of any requirement as necessary.
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  li {
    display: inline-block;
    margin: 0 10px;
  }

  li:nth-of-type(2n-1) {
    background-color: rgba(76, 80, 83, 0.6);
  }

</style>
