import { myAxios } from "./helper";

import axios from "axios";
export const signUp = (user) => {
  return myAxios.post("/user/register", user).then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return axios
    .post("http://localhost:8080/api/user/login", loginDetail)
    .then((response) => response.data);
};

// export const getUser = (userId) => {
//   return myAxios.get(`/users/${userId}`).then((resp) => resp.data);
// };
// export const getLocation = ()=>{
//     return privateAxios.get("/location/fetch").then((response)=>response.data)
// }