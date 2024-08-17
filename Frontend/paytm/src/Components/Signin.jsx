import axios from "axios";
import { BottomWarning } from "./BottomWarning";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { InputLabel } from "./inputLabel";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
export function Signin() {
    const [userSignin, setUserSignin] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const Navigate = useNavigate();
    async function fetchSignin() {

        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username: userSignin,
            password: userPassword
        })
        if(response) {
            Navigate("/dashboard");
        }
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
    }

    return<div className="bg-slate-300 h-screen flex justify-center ">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 p-2 h-max px-4">
        <Heading label={"Signin"} subHeading={"Enter your credentials to access your account"}></Heading>
        <InputLabel label={"Email"}></InputLabel>
        <InputBox label={"email@eamil.com"} inputValue={setUserSignin}></InputBox>
        <InputLabel label={"password"}></InputLabel>
        <InputBox label={"password"} inputValue={setUserPassword}></InputBox>
        <Button label="Sign In" onClick={fetchSignin}/>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
        </div>
    </div>
}
// Logic for when the button is clicked to redirect us to a new webpage but only if the response is a success.
// if signed In return this or return a different dashboard.