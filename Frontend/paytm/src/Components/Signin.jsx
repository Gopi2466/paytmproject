import axios from "axios";
import { BottomWarning } from "./BottomWarning";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { InputLabel } from "./inputLabel";
import { useState } from "react";

export function Signin() {
    const [userSignin, setUserSignin] = useState("")
    const [userPassword, setUserPassword] = useState("")
    async function fetchSignin() {

        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username: userSignin,
            password: userPassword
        })
        console.log(response.data)
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