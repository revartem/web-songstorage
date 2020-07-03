import Api from './Api'

export default {
  register (credetials) {
    return Api().post('register', credetials)
  },
  login (credetials) {
    return Api().post('login', credetials)
  }
}
