import { InputLabel } from "./inputLabel";

export function Balance({value}) {
    return <div className="flex justify-normal">
        <div className="font-bold text-lg">Your Balance</div>
        <div className="ml-4 font-bold text-lg">Rs {value}</div>
    </div>
} 