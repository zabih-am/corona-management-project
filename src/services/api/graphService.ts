import axios from 'axios'

export const getGermanyDataCovid = async ()=>{
  try{
    const data = await axios.get('https://api.covid19api.com/total/dayone/country/de')
    return data
  }catch(e){
    alert(e)
  }
}

export const getIranDataCovid = async ()=>{
  try{
    const data = await axios.get('https://api.covid19api.com/total/dayone/country/ir')
    return data
  }catch(e){
    alert(e)
  }
}