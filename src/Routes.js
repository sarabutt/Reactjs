import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from "./src/Login.js";
import Signup from "./src/Signup.js";
const Project= createStackNavigator({
  Login: {
   screen: Login
  },
  Signup: {
    screen: Signup
   },
});
export default createAppContainer(Project);