import React from "react";
import {Switch, Route } from "react-router-dom";
import "./index.css";
import Profile from "./Pages/Profile.jsx";
import Home from "./Pages/Home.jsx";
import SignUp from "./components/Signup";
import LogIn from "./components/LogIn";
import Forgot from "./Pages/Forgot";
import Messages from "./Pages/Messages";
import { auth } from './firebase.js';
export default function App() {

	return (<>
				<Switch>
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/signup" component={SignUp}/>
					<Route exact path="/password-reset" component={Forgot}/>
					<Route exact path="/messages" component={Messages}/>
					<Route path="/" component={Home} />
				</Switch>
	</>)
}
