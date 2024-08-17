import { useNavigate } from "react-router-dom"
import { BottomWarning } from "./BottomWarning"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./InputBox"
import { Signin } from "./Signin"
import { InputLabel } from "./inputLabel"
import axios from "axios"
import { useState } from "react"

export function Signup() {
    const [signupUsername, setSignupUsername] = useState("")
    const [signupFirstName, setSignupFirstName] = useState("")
    const [signupLastName, setSignupLastName] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const SignUpNavigate = useNavigate();
       // how can I create a sigle state variable to update all teh values

    async function fetchSignup() {
        console.log(signupFirstName, signupLastName, signupUsername, signupPassword)
       const response =  await axios.post("http://localhost:3000/api/v1/user/signup", {
                username: signupUsername,
                password: signupPassword,
                firstName: signupFirstName,
                lastName: signupLastName
    });
    if(response) {
        SignUpNavigate("/dashboard");
    }
    console.log(response.data.token)
    localStorage.setItem("token", response.data.token)
        
    }



    return <div className="flex justify-center h-screen bg-slate-300">
        <div className="flex justify-center flex-col">
        <div className="shadow-md shadow-black bg-white rounded-lg h-max w-80 px-4" >
            <Heading label="Sign Up" subHeading={"Enter your information to create an account"}/>
            <InputLabel label="First Name" />
            <InputBox label= "Gopi" inputValue={setSignupFirstName}/>
            <InputLabel label="Last Name" />
            <InputBox label="Singh" inputValue={setSignupLastName}/>
            <InputLabel label="Email" />
            <InputBox label="Singh" inputValue={setSignupUsername}/>
            <InputLabel label="Password" />
            <InputBox label="password" inputValue={setSignupPassword}/>
    <div ><Button onClick={fetchSignup} label= "Sign Up"/></div>
    <BottomWarning label={"Already have an account?"} buttonText={"Login"} to={"/signin"}/>
    </div>
    </div>
    </div>
}