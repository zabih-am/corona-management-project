<template>
  <div class="overview">
    <div class="overview__lables d-flex-sb">
      <div @click="getConfirmPatients('confirmed')" class="overview__card d-flex-col-se" :class="{'overview__card--active': activeName === 'confirmed'}">
        <div class="overview__card--title" :class="{'overview__card--title-active' : activeName === 'confirmed'}">Confirmed</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : activeName === 'confirmed'}">70</div>
      </div>
      <div @click="getConfirmPatients('active')" class="overview__card d-flex-col-se" :class="{'overview__card--active': activeName === 'active'}">
        <div class="overview__card--title" :class="{'overview__card--title-active' : activeName === 'active'}">Active</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : activeName === 'active'}">100</div>
      </div>
      <div @click="getConfirmPatients('recovered')" class="overview__card d-flex-col-se" :class="{'overview__card--active': activeName === 'recovered'}">
        <div class="overview__card--title" :class="{'overview__card--title-active' : activeName === 'recovered'}">Recovered</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : activeName === 'recovered'}">50</div>
      </div>
      <div @click="getConfirmPatients('death')" class="overview__card d-flex-col-se" :class="{'overview__card--active': activeName === 'death'}">
        <div class="overview__card--title" :class="{'overview__card--title-active' : activeName === 'death'}">Death</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : activeName === 'death'}">10</div>
      </div>
    </div>
    <div class="overview__chart">
      <div class="overview__chart--header">
        total covid 19 Graph
      </div>
      <div class="overview__chart--content">
        <Graph v-if="loaded" :labels="date" :chartData="confirmedPatients"/>
        <v-progress-circular
          class="center"
          v-if="!loaded"
          :size="50"
          :width="7"
          color="blue"
          indeterminate
        ></v-progress-circular>
      </div>
    </div>
  </div>
</template>
<script>
import Graph from '@/components/overview/Graph'
import { getGermanyDataCovid , getIranDataCovid } from '@/services/api/graphService'
import moment from "moment";

export default {
  name: 'Overview',
  components: {
    Graph
  },
  data(){
    return{
      loaded: false,
      activeName: this.$route.params.type,
      confirmedPatients: [],
      activePatients: [],
      deathPatients: [],
      recoveredPatients: [],
      germanData: [],
      iranData: [],
      date: []

    }
  },
  methods: {
    getConfirmPatients(name){
      if(name === 'confirmed'){
        this.activeName = 'confirmed'
        this.$router.push({params: {type: 'confirmed'}})
      }else if(name === 'active'){
        this.activeName = 'active'
        this.$router.push({params: {type: 'active'}})
      }else if(name === 'recovered'){
        this.activeName = 'recovered'
        this.$router.push({params: {type: 'recovered'}})
      }else {
        this.activeName = 'death'
        this.$router.push({params: {type: 'death'}})
      }
    }
  },
 async created(){
    try{
			this.loaded = false
			const grmanyPatients = await getGermanyDataCovid()
			console.log(grmanyPatients?.data)
			this.confirmedPatients= [],
			this.activePatients= [],
			this.deathPatients= [],
			this.recoveredPatients= [],
			this.date= []
			const dataArray = grmanyPatients?.data
			const newArray = dataArray.slice(dataArray.length-30 , dataArray.length)
			newArray.forEach( (data)  =>{
				const date =  moment(data.Date).format("MM/DD");
				this.date.push(date)
				this.activePatients.push(data.Active)
				this.deathPatients.push(data.Deaths)
				this.recoveredPatients.push(data.Recovered)
				this.confirmedPatients.push(data.Confirmed)
			})
      this.loaded = true
      console.log(this.loaded)
		}
		catch(e){
			console.log(e)
    }
    console.log('confirmedPatients' , this.confirmedPatients)
  }, 
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/variable.scss';
  .overview{
    &__lables{
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    &__card{
      width: 16rem;
      height: 8rem;
      background: $white;
      border-radius: .5rem;
      border: 1px solid $white3;
      cursor: pointer;
      &--active{
        border: 1px solid $blue;
      }
      &--title{
        font-size: 19px;
        font-weight: bold;
        color: $gray-text;
        &-active{
          color: $blue;
        }
      }
      &--number{
        font-size: 40px;
        font-weight: bold;
        color: $gray-dark;
        &-active{
          color: $blue;
        }
      }
    }
    &__chart{
      width: 100%;
      background: $white;
      border: 1px solid $white3;
      border-radius: .5rem;
      position: relative;
      padding: 2rem;
      &--header{
        width: 100%;
        height: 5rem;
        font-size: 19px;
        font-weight: bold;
      }
    }
  }
</style>