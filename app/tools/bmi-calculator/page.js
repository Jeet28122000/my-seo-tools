"use client"
import { useState } from "react"

export default function BMI(){

const [weight,setWeight]=useState("")
const [height,setHeight]=useState("")
const [bmi,setBmi]=useState(null)

function calc(){

let h = height/100

let b = weight/(h*h)

setBmi(b.toFixed(2))

}

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-5">
BMI Calculator
</h1>

<input
className="border p-2 block mb-3"
placeholder="Weight (kg)"
onChange={(e)=>setWeight(e.target.value)}
/>

<input
className="border p-2 block mb-3"
placeholder="Height (cm)"
onChange={(e)=>setHeight(e.target.value)}
/>

<button
className="bg-black text-white px-4 py-2"
onClick={calc}
>
Calculate
</button>

{bmi && (
<h2 className="mt-5 text-xl">
BMI: {bmi}
</h2>
)}

</div>

)

}