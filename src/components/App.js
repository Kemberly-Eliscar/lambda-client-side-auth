import "./App.css"
import React from "react"
import { Link, Route } from "react-router-dom"
import Signin from "./Signin"
import Account from "./Account"
import ProtectedRoute from "./ProtectedRoute"
import { getToken } from "../utils/api"


function App() {
	const signedIn = getToken()

	return (
		<div className="wrapper">
			<nav>
				<Link to="/">Home</Link>
				{!signedIn && <Link to="/signin">Sign In</Link>}
				{!signedIn && <Link to="/account">My Account</Link>}
			</nav>

			<Route exact path="/signin" component={Signin} />
			<ProtectedRoute exact path="/account" component={Account} />
		</div>
	)
}

export default App
