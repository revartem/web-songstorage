import Api from "./Api";

export default {
  register (credetials){
    return Api().post('register', credetials)
  }
}


// AuthenticationService.register({
//   email: 'testing@gmail.com',
//     password: "123123"
// })
