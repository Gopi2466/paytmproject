import { Appbar } from "./Appbar"
import { Balance } from "./Balance"
import { Users } from "./Users"
import { useState, useEffect } from "react";
import axios from "axios"
export function Dashboard() {
    // when the dashboard for a specific user loads it should call the backend to send the balance 
    const [accountBalance, setAccountBalance] = useState(0);
    useEffect(() => {
       axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token") 
        }
        
       }).then(response => {
        setAccountBalance(response.data.balance)
       })
       
    }, [accountBalance])
    return<div className="p-10">
        <Appbar />
        <div className="m-5"><Balance value={accountBalance}/></div>
        <Users />
    </div>
}