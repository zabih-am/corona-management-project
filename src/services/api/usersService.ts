import IUser from '@/services/interfaces/IUser';

const users = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve([
      {id:0 ,name: 'Ali Ahmadi', img: 'https://zhaviz.com/wp-content/uploads/2020/02/%D8%B9%DA%A9%D8%B3-%D9%86%D9%88%D8%B4%D8%AA%D9%87-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D9%81%DB%8C%DA%A9-%D8%AE%D9%88%D8%B4%DA%AF%D9%84-%D8%AF%D8%AE%D8%AA%D8%B1%D9%88%D9%86%D9%87-%D8%AC%D8%AF%DB%8C%D8%AF-%D9%88-%D8%B2%DB%8C%D8%A8%D8%A7-%D8%A7%DB%8C%D9%86%D8%B3%D8%AA%D8%A7-30.jpg', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
      {id:1 ,name: 'Mohammad Safa', img: 'https://cutt.ly/yke0Ibz', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'},
      {id:2 ,name: 'Zabih Heydari', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Team_Korea_Russia_WorldCup_02_%28cropped%29.png', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
      {id:3 ,name: 'Sepehr Mohammadi', img: 'https://cutt.ly/ake0Rpd', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
      {id:4 ,name: 'Maria Gomez', img: 'https://cutt.ly/Eke0QD1', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'},
      {id:5 ,name: 'Sepehr Mohammadi', img: 'https://cutt.ly/ake0Rpd', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
      {id:6 ,name: 'Maria Gomez', img: 'https://cutt.ly/eke0YrG', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
      {id:7 ,name: 'Ali Ahmadi', img: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Team_Korea_Russia_WorldCup_11_%28cropped%29.jpg', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
      {id:8 ,name: 'Zabih Heydari', img: 'https://cutt.ly/ike0PRX', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'},
      {id:9 ,name: 'Mohammad Safa', img: 'https://cutt.ly/Kke0DMR', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
      {id:10 ,name: 'alireza ahmadi', img: 'https://cutt.ly/3ke0H2h', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
      {id:11 ,name: 'Ali Ahmadi', img: 'https://cutt.ly/Cke0L30', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
      {id:12 ,name: 'Zabih Heydari', img: 'https://cutt.ly/Fke0Vsm', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'},
      {id:13 ,name: 'Sepehr Mohammadi', img: 'https://cutt.ly/3ke0Ntl', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
      {id:14 ,name: 'Ali Ahmadi', img: 'https://cutt.ly/Uke0MDs', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
      {id:15 ,name: 'Maria Gomez', img: 'https://cutt.ly/yke00Hh', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'}
    ])
    reject('error occurs')
  }, 2000)
})

export const getUsers =async ()=> {
  try{
    const data = await users
    return data as IUser[]
  }catch(e){
    console.log(e) 
  }
}