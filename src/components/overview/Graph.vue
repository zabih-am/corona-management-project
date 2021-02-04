<script>
import { Line , mixins } from 'vue-chartjs'
// const { reactiveProp } = mixins
export default {
  extends: Line,
  // mixins: [reactiveProp],
  name: 'Graph',
  props: ['chartData','chartData2','labels'],
  data(){
    return{
    }
  },
  computed: {
    chartData1: function() {
      return this.data;
    }
  },
  methods: {
    chart(){
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
            {
              label: 'Iran',
              backgroundColor : 'rgba(55, 82, 255, 0.1)',
              borderColor: '#3751FF',
              borderWidth: 3,
              radius: 0,
              data: this.chartData2
            }
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
          events: ['click']
        }
      )
    }
  },
  async mounted () {
    this.chart()
  },
  watch: {
    chartData: function() {
      this.chart()
    },
    chartData2: function(){
      this.chart()
    }
  }
}
</script>
<style lang="scss">
</style>