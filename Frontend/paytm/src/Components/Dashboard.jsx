import { Appbar } from "./Appbar"
import { Balance } from "./Balance"
import { Users } from "./Users"

export function Dashboard() {
    return<div className="p-10">
        <Appbar />
        <div className="m-5"><Balance value={"10000"}/></div>
        <Users />
    </div>
}