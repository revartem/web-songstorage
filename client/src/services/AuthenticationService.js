import Api from "./Api";

export default {
  register(credetials) {
    return Api().post('register', credetials)
  }
}
