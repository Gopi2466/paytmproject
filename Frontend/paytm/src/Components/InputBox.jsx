export function InputBox({label, inputValue}) {
    return <input className="border p-2 rounded-md w-full" type="text" placeholder={label} onChange={(e) => {
        inputValue(e.target.value)
    }}></input>
    
}

// How can a child component send something back to the main component.