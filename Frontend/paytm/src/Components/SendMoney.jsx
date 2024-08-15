import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { InputLabel } from "./inputLabel";

export function SendMoney() {
    return <div className="flex justify-center h-screen">
    <div className="flex flex-col justify-center"> 
        <div className="shadow rounded-lg w-80 h-max p-4">
        <Heading label={"Send Money"} subHeading={" "}/>
        <div className="flex">
            <div className="h-12 w-12 rounded-full bg-green-400">
                <div className="text-xl font-bold ml-4 mt-2">A</div>
            </div>
            <div className="flex flex-col text-xl font-bold justify-center ml-3">Friend's Name</div>
        </div>
        <InputLabel label={"Amount in (Rs)"}/>
        <InputBox label={"Enter Amount"}/>
        
        <button className="bg-green-400 text-white text-md w-full mt-4 p-1 rounded-md">Initiate Transfer</button>
    
    </div>
    </div>
    </div>
}