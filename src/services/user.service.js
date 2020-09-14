import ApiService from './api.service'
import { TokenService } from './storage.service'

const UserService = {
  signup (user) {
    return ApiService.post('/auth/signup', user)
  },
  login (username, password) {
    return ApiService.post('/auth/login', { login: username, password: password })
      .then(response => {
        TokenService.saveToken(response.data.token)
        ApiService.setHeader()
      })
  },

  logout () {
    TokenService.removeToken()
    ApiService.removeHeader()
  }
}

export default UserService
