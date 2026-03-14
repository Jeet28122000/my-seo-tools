"use client"
import { useState } from "react"

export default function EMICalculator() {

const [loan,setLoan]=useState("")
const [rate,setRate]=useState("")
const [months,setMonths]=useState("")
const [emi,setEmi]=useState(null)
const [error,setError]=useState("")

function calc(){

if(!loan || !rate || !months){
setError("Please fill all fields")
return
}

setError("")

let r = rate/12/100
let e = loan*r*Math.pow(1+r,months)/(Math.pow(1+r,months)-1)

setEmi(e.toFixed(2))

}

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

<div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

<h1 className="text-3xl font-bold text-center mb-2">
EMI Calculator
</h1>

<p className="text-gray-500 text-center mb-6">
Calculate monthly loan EMI instantly
</p>

<input
type="number"
className="border w-full p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
placeholder="Loan Amount (₹)"
value={loan}
onChange={(e)=>setLoan(e.target.value)}
/>

<input
type="number"
className="border w-full p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
placeholder="Interest Rate (%)"
value={rate}
onChange={(e)=>setRate(e.target.value)}
/>

<input
type="number"
className="border w-full p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
placeholder="Loan Tenure (Months)"
value={months}
onChange={(e)=>setMonths(e.target.value)}
/>

<button
className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
onClick={calc}
>
Calculate EMI
</button>

{error && (
<p className="text-red-500 text-center mt-4">
{error}
</p>
)}

{emi && (

<div className="mt-6 text-center bg-gray-50 p-4 rounded-lg">

<h2 className="text-2xl font-bold">
Monthly EMI
</h2>

<p className="text-3xl font-bold text-blue-600 mt-2">
₹{Number(emi).toLocaleString()}
</p>

</div>

)}

</div>

</div>

)

}