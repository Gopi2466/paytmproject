import { useState } from "react"
import { Button } from "./Button"
import { InputBox } from "./InputBox"

export function Users() {
    const [users, setUsers] = useState([{
        firstName: "Gurpreet",
        lastName: "Singh",
        _id: 1
    }])
    return <div className="m-5">
        <div className="font-bold text-lg ">Users</div>
        <div className="mt-3"><InputBox label={"Search users..."}/></div>
        <div>{users.map(user => <User user={user}/>)}</div>
        
    </div>

}




export function User({user}) {
    return <div className="flex justify-between h-14 mt-4">
        <div className="flex">
            <div className="flex flex-col justify-center h-12 w-12 mt-1 rounded-full bg-slate-200">
                <div className="flex flex-col justify-center ml-4 text-xl font-bold">{user.firstName[0]}</div>
            </div>
            <div className="flex justify-center h-full flex-col ml-2">{user.firstName} {user.lastName}</div>
        </div>
        <div className="flex flex-col justify-center w-1/4"><Button label={"Send Money"} /></div>
       
    </div>
}