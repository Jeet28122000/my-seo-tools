"use client"
import { useState } from "react"

export default function EMI() {

const [loan,setLoan]=useState("")
const [rate,setRate]=useState("")
const [months,setMonths]=useState("")
const [emi,setEmi]=useState(null)

function calc(){

let r = rate/12/100

let e = loan*r*Math.pow(1+r,months)/(Math.pow(1+r,months)-1)

setEmi(e.toFixed(2))

}

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-5">
EMI Calculator
</h1>

<input
className="border p-2 block mb-3"
placeholder="Loan amount"
onChange={(e)=>setLoan(e.target.value)}
/>

<input
className="border p-2 block mb-3"
placeholder="Interest rate"
onChange={(e)=>setRate(e.target.value)}
/>

<input
className="border p-2 block mb-3"
placeholder="Months"
onChange={(e)=>setMonths(e.target.value)}
/>

<button
className="bg-black text-white px-4 py-2"
onClick={calc}
>
Calculate
</button>

{emi && (
<h2 className="mt-5 text-xl">
Monthly EMI: ₹{emi}
</h2>
)}

</div>

)

}