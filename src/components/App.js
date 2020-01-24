import "./App.css"
import React from "react"
import { Link, Route } from "react-router-dom"
import Signin from "./Signin"
import Account from "./Account"
import ProtectedRoute from "./ProtectedRoute"


function App() {
	return (
		<div className="wrapper">
			<nav>
				<Link to="/">Home</Link>
				<Link to="/signin">Sign In</Link>
				<Link to="/account">My Account</Link>
			</nav>

			<Route exact path="/signin" component={Signin} />
			<ProtectedRoute exact path="/account" component={Account} />
		</div>
	)
}

export default App
