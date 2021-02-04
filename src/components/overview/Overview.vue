<template>
  <div class="overview">
    <div class="overview__lables d-flex-sb">
      <div @click="getTypePatients('confirmed')" class="overview__card d-flex-col-se" :class="{'overview__card--active': activeName === 'confirmed'}">
        <div class="overview__card--title" :class="{'overview__card--title-active' : activeName === 'confirmed'}">Confirmed</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : activeName === 'confirmed'}">70</div>
      </div>
      <div @click="getTypePatients('active')" class="overview__card d-flex-col-se" :class="{'overview__card--active': activeName === 'active'}">
        <div class="overview__card--title" :class="{'overview__card--title-active' : activeName === 'active'}">Active</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : activeName === 'active'}">100</div>
      </div>
      <div @click="getTypePatients('recovered')" class="overview__card d-flex-col-se" :class="{'overview__card--active': activeName === 'recovered'}">
        <div class="overview__card--title" :class="{'overview__card--title-active' : activeName === 'recovered'}">Recovered</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : activeName === 'recovered'}">50</div>
      </div>
      <div @click="getTypePatients('death')" class="overview__card d-flex-col-se" :class="{'overview__card--active': activeName === 'death'}">
        <div class="overview__card--title" :class="{'overview__card--title-active' : activeName === 'death'}">Death</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : activeName === 'death'}">10</div>
      </div>
    </div>
    <div class="overview__chart">
      <div class="overview__chart--header">
        total covid 19 Graph
      </div>
      <div class="overview__chart--content">
        <Graph v-if="loaded" :labels="date" :chartData="germanyPatients" :chartData2="iranPatients"/>
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
      germanyPatients: [],
      iranPatients: [],
      germanyData: [],
      iranData: [],
      date: []
    }
  },
  methods: {
    //click event for type of patients
    getTypePatients(name){
      if(name === 'confirmed' && this.activeName !== 'confirmed'){
        this.activeName = 'confirmed'
        this.$router.push({params: {type: 'confirmed'}})
        this.changePatientsType('Confirmed')
      }else if(name === 'active' && this.activeName !== 'active'){
        this.activeName = 'active'
        this.$router.push({params: {type: 'active'}})
        this.changePatientsType('Active')
        console.log('active is working')
      }else if(name === 'recovered' && this.activeName !== 'recovered'){
        this.activeName = 'recovered'
        this.$router.push({params: {type: 'Recovered'}})
        this.changePatientsType('Recovered')
      }else if(name === 'death' && this.activeName !== 'death'){
        this.activeName = 'death'
        this.$router.push({params: {type: 'death'}})
        this.changePatientsType('Deaths')
      }
    },

    async getGermanyData(){
      try{
        const germanyPatients = await getGermanyDataCovid()
        this.date= []
        const dataArray = germanyPatients?.data
        const newArray = dataArray.slice(dataArray.length-30 , dataArray.length)
        this.germanyData = newArray
      }
      catch(e){
        console.log(e)
      }
    },

    async getIranData(){
      try{
        this.loaded = false
        const IranPatients = await getIranDataCovid()
        this.date= []
        const dataArray = IranPatients?.data
        const newArray = dataArray.slice(dataArray.length-30 , dataArray.length)
        this.iranData = newArray
        this.loaded = true
      }
      catch(e){
        console.log(e)
      }
    },
    async changePatientsType( typePatients ){
       this.germanyPatients = []
       this.iranPatients = []
       this.date = []
        const newArray = this.germanyData.slice(this.germanyData.length-30 , this.germanyData.length)
        newArray.forEach( (data)  =>{
        const date =  moment(data.Date).format("MM/DD");
        this.date.push(date)
        this.germanyPatients.push(data[typePatients])
      })
      const newArray2 = this.iranData.slice(this.iranData.length-30 , this.iranData.length)
      newArray2.forEach( (data) =>{
      this.iranPatients.push(data[typePatients])
      })
    }
  },
  async created(){
    await this.getGermanyData(),
    await this.getIranData()
    if(this.iranData && this.germanyData){
      this.changePatientsType('Confirmed')
    }
  }, 
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variable.scss';
  .overview{
    &__lables{
      flex-wrap: wrap;
      margin-bottom: 2rem;
      @media only screen and (max-width: 1300px) {
        justify-content: center !important;
      }
    }
    &__card{
      width: 16rem;
      height: 8rem;
      background: $white;
      border-radius: .5rem;
      border: 1px solid $white3;
      cursor: pointer;
      margin: .5rem;
      @media only screen and (max-width: 1400px) {
        width: 14rem;
        height: 7rem;
      }
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