import { useSearchParams } from "react-router-dom";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { InputLabel } from "./inputLabel";
import { useState } from "react";
import axios from "axios";
export function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    return <div className="flex justify-center h-screen">
    <div className="flex flex-col justify-center"> 
        <div className="shadow rounded-lg w-80 h-max p-4">
        <Heading label={"Send Money"} subHeading={" "}/>
        <div className="flex">
            <div className="h-12 w-12 rounded-full bg-green-400">
                <div className="text-xl font-bold ml-4 mt-2">{name[0].toUpperCase()}</div>
            </div>
            <div className="flex flex-col text-xl font-bold justify-center ml-3">{name}</div>
        </div>
        <InputLabel label={"Amount (in Rs)"}/>
        <InputBox inputValue={setAmount} label={"Enter Amount"}/>
        
        <button className="bg-green-400 text-white text-md w-full mt-4 p-1 rounded-md" onClick={(e) => {
            axios.post("http://localhost:3000/api/v1/account/transfer",{
                amount: amount,
                to: id
            },{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token")

        }});
        alert("Your money has been sent.")}}>Initiate Transfer</button>
    
    </div>
    </div>
    </div>
}