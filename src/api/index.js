// import axios from 'axios'

// export const fetchData = async () => {
//   try {
//     const response = await axios.get('https://futuramaapi.herokuapp.com/api/characters/bender/')
//     const data = response.data[0]
//     console.log('response request api:', response.data)
//     console.log("data request api :", data)
//     return data
//   } catch (error) {
//     if (error.response) {
//       console.log('err.res.data :', error.response.data)
//       console.log('err.res.status :', error.response.status)
//       console.log('err.res.headers : ', error.response.headers)
//     } else if (error.request) {
//       console.log('error request :', error.request)
//     } else {
//       console.log('Error message :', error.message)
//     }
//     console.log('error :', error)
//   }
// }