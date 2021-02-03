import { getGermanyDataCovid , getIranDataCovid } from '@/services/api/graphService'
import moment from "moment";

const state = {
	loaded: false,
	confirmedPatients: [],
	activePatients: [],
	deathPatients: [],
	recoveredPatients: [],
	germanData: [],
	iranData: [],
	date: []
};

const mutations = {
  async getGermanyPatients(state: any){
		try{
			state.loaded = false
			const grmanyPatients = await getGermanyDataCovid()
			console.log(grmanyPatients?.data)
			state.confirmedPatients= [],
			state.activePatients= [],
			state.deathPatients= [],
			state.recoveredPatients= [],
			state.date= []
			const dataArray = grmanyPatients?.data
			const newArray = dataArray.slice(dataArray.length-30 , dataArray.length)
			newArray.forEach( (data: any)  =>{
				const date =  moment(data.Date).format("MM/DD");
				state.date.push(date)
				state.activePatients.push(data.Active)
				state.deathPatients.push(data.Deaths)
				state.recoveredPatients.push(data.Recovered)
				state.confirmedPatients.push(data.Confirmed)
			})
			state.loaded = true
		}
		catch(e){
			console.log(e)
		}
			console.log(state.date)
	}
};

const actions = {
	getGermanyPatients: (context: any ) =>{
		context.commit('getGermanyPatients')
		console.log('this is action')
	},
	getIranPatients: (context: any) => {
		context.commit('getIranPatients')
	}
};
const getters = {

}

export default {
	state,
	mutations,
	actions,
	getters
} as any;