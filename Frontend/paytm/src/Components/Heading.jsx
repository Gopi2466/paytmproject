export function Heading({label, subHeading}) {
    return <div className="p-5">
    <div className="font-bold text-4xl px-10 py-2 text-center">
        {label}    
    </div>
    <h3 className="text-center text-sm">{subHeading}</h3>
    </div>
}