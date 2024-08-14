import { BottomWarning } from "./BottomWarning"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./InputBox"
import { Signin } from "./Signin"
import { InputLabel } from "./inputLabel"

export function Signup() {
    return <div className="flex justify-center h-screen bg-slate-300">
        <div className="flex justify-center flex-col">
        <div className="shadow-md shadow-black bg-white rounded-lg h-max w-80 px-4" >
            <Heading label="Sign Up" subHeading={"Enter your information to create an account"}/>
            <InputLabel label="First Name" />
            <InputBox label="Gopi"/>
            <InputLabel label="Last Name" />
            <InputBox label="Singh"/>
            <InputLabel label="Password" />
            <InputBox label="password"/>
    <div ><Button label= "Sign Up"/></div>
    <BottomWarning label={"Already have an account?"} buttonText={"Login"} to={"/signin"}/>
    </div>
    </div>
    </div>
}