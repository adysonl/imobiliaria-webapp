
import axios from 'axios'
import { TokenService } from '@/services/storage.service'

const ApiService = {

  init (baseURL) {
    axios.defaults.baseURL = baseURL
    if (TokenService.getToken()) {
      this.setHeader()
    }
  },

  setHeader () {
    axios.defaults.headers.common['x-access-token'] = TokenService.getToken()
  },

  removeHeader () {
    axios.defaults.headers.common = {}
  },

  get (resource) {
    return axios.get(resource)
  },

  post (resource, data) {
    return axios.post(resource, data)
  },

  put (resource, data) {
    return axios.put(resource, data)
  },

  delete (resource) {
    return axios.delete(resource)
  }
}

export default ApiService
