export function Button({label, onClick}) {
    
    return <button onClick={onClick} className="bg-black w-full rounded-md text-neutral-50 text-center py-2 my-3">{label}</button>
}