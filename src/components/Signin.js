import React, { useState } from "react";
import api from "../utils/api"


function Signin(props) {

    //THIS IS OPTIONAL ERROR MESSAGE FUNCTION
    const [error, setError] = useState()

    //create an object to set state
    const [data, setData] = useState({
        //define initial value
        email: "",
        password: "",
    })
    
    //handle change function for those inputs
    //a function that takes in an event as their parameters
    //we need to take target name and value to set state
    const handleChange = (event) => {
        setData({
            //set an immutable object by using a spread operator ...
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    // we need to set up a handleSubmit function
    const handleSubmit =(event) => {
            event.preventDefault()
            // post request because we are sending data
            api()
            .post("/signin", data)
            .then(result => {
                console.log(result.data)
                localStorage.setItem("token", result.data.token)
                props.history.push("/account")
            })
            .catch(err => {
                setError(err.response.data.message)
            })
        }
    

        //last step we need to attach the values and keys and handle change functions to each one of our inputs
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error"> {error}</div>} 

            <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

            <button type="submit">Sign In</button>
        </form>
    )
}

export default Signin