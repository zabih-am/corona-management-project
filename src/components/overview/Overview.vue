<template>
  <div class="overview">
    <div class="overview__lables d-flex-sb">
      <div class="overview__card d-flex-col-se" :class="{'overview__card--active': active}" @click="active = !active">
        <div class="overview__card--title" :class="{'overview__card--title-active' : active}">total</div>
        <div class="overview__card--number" :class="{'overview__card--number-active' : active}">70</div>
      </div>
      <div class="overview__card d-flex-col-se">
        <div class="overview__card--title">active</div>
        <div class="overview__card--number">100</div>
      </div>
      <div class="overview__card d-flex-col-se">
        <div class="overview__card--title">recovered</div>
        <div class="overview__card--number">50</div>
      </div>
      <div class="overview__card d-flex-col-se">
        <div class="overview__card--title">Death</div>
        <div class="overview__card--number">10</div>
      </div>
    </div>
    <div class="overview__chart">
      <div class="overview__chart--header">
        total covid 19 Graph
      </div>
      <div class="overview__chart--content">
        <Graph :chartData="date" :germanyData="deathPatients" :iranData="recoveredPatients" :options="options"/>
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
      gradian: '',
      active: false,
      confirmedPatients: [],
      activePatients: [],
      deathPatients: [],
      recoveredPatients: [], 
      date: [],

      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
           xAxes: [{
            gridLines: {
              display: false,
             },
          }]
        },
      }
    }
  },

  async mounted(){
    const germanyPatients = getGermanyDataCovid()
      germanyPatients.then((data)=>{
      const dataArray = data?.data
      const newArray = dataArray.slice(dataArray.length-30 , dataArray.length)
      console.log(newArray)
      newArray.forEach( data =>{
        const date =  moment(data.Date).format("MM/DD");
        this.date.push(date)
        this.activePatients.push(data.Active)
        this.deathPatients.push(data.Deaths)
        this.recoveredPatients.push(data.Recovered)
        this.confirmedPatients.push(data.Confirmed)
      })
    }).catch((e)=>{
      console.log(e)
    })

    // const iranPatients = getIranDataCovid().then((data)=>{
    //   const dataArray = data.data
    //   const newArray = dataArray.slice(dataArray.length - 30 , dataArray.length)
    //   // console.log(newArray)
    // })
  }
  
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