import axios from 'axios'

export const API_URL = 'https://dummyjson.com'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json'
  }
})

export default instance
