// import axios from "axios";
import localStorageService from "./localStorageService";
import Api from "./axios";

class JwtAuthService {
  
  // user = {
  //   userId: "1",
  //   role: 'ADMIN',
  //   displayName: "Watson Joyce",
  //   email: "watsonjoyce@gmail.com",
  //   photoURL: "/assets/images/face-7.jpg",
  //   age: 25,
  //   token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh"
  // }

  loginWithEmailAndPassword = (email, password) => {
    
    return Api.post('/login', { "user": { email, password } })
    .then(data => data.data.user);
      // console.log(data.data);
      // this.setSession(data.data.user.authentication_token);
      // this.setUser(data.data.user);
    //   return data.data.user;
      
    // });
  };

  // loginWithToken = () => {
  //   return Api.post('/login', { "user": { email, password } })
  //   .then(data => data.data.user);
  // };

  

  logout = () => {
    // this.setSession(null);
    // this.removeUser();
    return Api.delete('/logout')
    // .then(res => { console.log(res.data); res.data.json() });
  }

  setSession = token => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("jwt_token");
      // delete axios.defaults.headers.common["Authorization"];
    }
  };
  setUser = (user) => {    
    localStorageService.setItem("auth_user", user);
  }
  removeUser = () => {
    localStorage.removeItem("auth_user");
  }
}

export default new JwtAuthService();
