import React from 'react'

const TOKEN = "token";
const USER = "user";

export const saveToken = (token)=>{
  sessionStorage.removeItem(TOKEN);
  sessionStorage.setItem(TOKEN,token);
}

export const saveUser = (user)=>{
    sessionStorage.removeItem(USER);
    sessionStorage.setItem(USER,user);
}

export const getToken = ()=>{
   return  sessionStorage.getItem(TOKEN);
}

export const getUser = ()=>{
    return sessionStorage.getItem(USER);
}

export const logOut = ()=>{
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(USER);
}

export const isUserLoggedIn = ()=>{
    if(getToken() == null) return false;
    const role = getUser();
    return role == "USER";
}