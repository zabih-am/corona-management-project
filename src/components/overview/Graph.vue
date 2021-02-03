<script>
import { Line , mixins } from 'vue-chartjs'
// const { reactiveProp } = mixins
export default {
  extends: Line,
  // mixins: [reactiveProp],
  // mixins: [VueChartJs.mixins.reactiveProp],
  name: 'Graph',
  props: ['chartData','labels'],
  data(){
    return{
    }
  },
  computed: {
    test:{
      get(){
        return this.$store.state.graphDataStore.confirmedPatients
      }
    }
  },
  async mounted () {
      this.renderChart( 
      {
        labels:this.labels,
        datasets: [
          {
            label: 'Germany',
            strokeColor : "#ff6c23",
            borderColor: '#DFE0EB',
            backgroundColor : 'transparent',
            radius: 0,
            data: this.chartData
          },
          // {
          //   label: 'Iran',
          //   backgroundColor : 'rgba(55, 82, 255, 0.1)',
          //   borderColor: '#3751FF',
          //   borderWidth: 3,
          //   radius: 0,
          //   data: this.$store.state.graphDataStore.deathPatients
          // }
        ]
      },
     {
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
    )
    console.log('graph created')
  }
}
</script>
<style lang="scss">
</style>