import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.credentials = 'include'
axios.defaults.crossdomain = true

axios.defaults.headers = { "Access-Control-Allow-Origin": "*" }
// const config = {
//   headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/x-www-form-urlencoded" }
// }

export default axios.create({
  baseURL: 'http://localhost:3000',
  // config
});
