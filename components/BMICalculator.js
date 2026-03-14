"use client"
import { useState } from "react"

export default function BMICalculator(){

const [weight,setWeight]=useState("")
const [height,setHeight]=useState("")
const [bmi,setBmi]=useState(null)

function calc(){

if(!weight || !height){
return
}

let h = height/100
let b = weight/(h*h)

setBmi(b.toFixed(2))

}

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

<div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

<h1 className="text-3xl font-bold text-center mb-2">
BMI Calculator
</h1>

<p className="text-gray-500 text-center mb-6">
Calculate your Body Mass Index instantly
</p>

<input
className="border w-full p-3 rounded-md mb-4"
placeholder="Weight (kg)"
type="number"
value={weight}
onChange={(e)=>setWeight(e.target.value)}
/>

<input
className="border w-full p-3 rounded-md mb-4"
placeholder="Height (cm)"
type="number"
value={height}
onChange={(e)=>setHeight(e.target.value)}
/>

<button
className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
onClick={calc}
>
Calculate BMI
</button>

{bmi && (

<div className="mt-6 text-center bg-gray-50 p-4 rounded-lg">

<h2 className="text-2xl font-bold">
Your BMI
</h2>

<p className="text-3xl font-bold text-blue-600 mt-2">
{bmi}
</p>

</div>

)}

</div>

</div>

)

}