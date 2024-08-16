import { BottomWarning } from "./BottomWarning"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./InputBox"
import { Signin } from "./Signin"
import { InputLabel } from "./inputLabel"
import axios from "axios"

export function Signup() {
    const [signupObject, setSignupObject] = useState({
        username: "",
        password:"",
        firstName: "",
        lastName:""
    })

    async function fetchSignup() {
       const response =  await axios.post("http://localhost:3000/app/v1/user/signup", {
                username: signupObject.username,
                password: signupObject.password,
                firstName: signupObject.firstName,
                lastName: signupObject.lastName
    },
            { headers: {
                'Content-Type': "application/json",
                "Authorization": "Token value here"
            },
            
        });

        console.log(response.data);
    }



    return <div className="flex justify-center h-screen bg-slate-300">
        <div className="flex justify-center flex-col">
        <div className="shadow-md shadow-black bg-white rounded-lg h-max w-80 px-4" >
            <Heading label="Sign Up" subHeading={"Enter your information to create an account"}/>
            <InputLabel label="First Name" />
            <InputBox label= "Gopi" inputValue={setSignupObject}/>
            <InputLabel label="Last Name" />
            <InputBox label="Singh" inputValue={setSignupObject}/>
            <InputLabel label="Password" />
            <InputBox label="password" inputValue={setSignupObject}/>
    <div ><Button onClick={fetchData} label= "Sign Up"/></div>
    <BottomWarning label={"Already have an account?"} buttonText={"Login"} to={"/signin"}/>
    </div>
    </div>
    </div>
}