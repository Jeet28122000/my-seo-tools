"use client"
import { useState } from "react"

export const metadata = {
  title: "BMI Calculator – Check Your Body Mass Index | ExamSoup",
  description:
    "Free BMI calculator to check your Body Mass Index using height and weight. Know if you are underweight, normal, overweight or obese.",
}

export default function BMI() {

  const [weight,setWeight]=useState("")
  const [height,setHeight]=useState("")
  const [bmi,setBmi]=useState(null)
  const [status,setStatus]=useState("")

  function calc(){

    if(!weight || !height) return

    let h = height/100
    let b = weight/(h*h)
    let result = b.toFixed(2)

    setBmi(result)

    if(result < 18.5){
      setStatus("Underweight")
    }
    else if(result >= 18.5 && result < 24.9){
      setStatus("Normal Weight")
    }
    else if(result >= 25 && result < 29.9){
      setStatus("Overweight")
    }
    else{
      setStatus("Obese")
    }
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-3 text-gray-800">
          BMI Calculator
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Calculate your Body Mass Index instantly
        </p>

        <input
          type="number"
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter Weight (kg)"
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
        />

        <input
          type="number"
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter Height (cm)"
          value={height}
          onChange={(e)=>setHeight(e.target.value)}
        />

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          onClick={calc}
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 text-center bg-gray-50 p-4 rounded-lg">

            <h2 className="text-2xl font-bold text-gray-800">
              Your BMI: {bmi}
            </h2>

            <p className="text-lg mt-2 text-indigo-600 font-medium">
              {status}
            </p>

          </div>
        )}

      </div>

    </div>

  )

}