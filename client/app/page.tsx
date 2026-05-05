"use client"
import React from "react";

const LandingPage = ()=>{
  const handleSeverHealthCheck = async ()=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL as string}/health`,{
      method:'GET'
    })
    const data = await response.json()
    console.log("backend response: ", data) 
  }
  return (
    <div><button onClick={handleSeverHealthCheck}>Check Server Health</button></div>
  )
}
export default LandingPage