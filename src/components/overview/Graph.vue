<script>
import { Line , mixins } from 'vue-chartjs'
// const { reactiveProp } = mixins
export default {
  extends: Line,
  // mixins: [reactiveProp],
  // mixins: [VueChartJs.mixins.reactiveProp],
  name: 'Graph',
  props: {
    germanyData: {
      type: Array,
      default: null
    },
    iranData: {
      type: Array,
      default: null
    },
    options: {
      type: Object,
      default: null
    },
    chartData: {
      type: Array,
      default: null
    }
  },
  data(){
    return{
      // test: this.germanyData
    }
  },
  computed: {
    test:{
      get(){
        
        return this.germanyData
      }
    }
  },
  async mounted () {
    this.renderChart(
      {
        labels: this.chartData,
        datasets: [ 
          {
            label: 'Germany',
            strokeColor : "#ff6c23",
            borderColor: '#DFE0EB',
            backgroundColor : 'transparent',
            radius: 0,
            data: this.test
          },
          {
            label: 'Iran',
            backgroundColor : 'rgba(55, 82, 255, 0.1)',
            borderColor: '#3751FF',
            borderWidth: 3,
            radius: 0,
            data: this.iranData
          }
        ]
      },
      this.options)
  },
  watch: {
    test:function(){
      console.log('data is change successfullys')
    }
  }
}
</script>
<style lang="scss">
</style>