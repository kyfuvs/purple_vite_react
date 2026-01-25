import React from 'react'
import { usePurple } from "../context/PurpleContext";

export default function User_info() {
  const { userId,nuName, nuDOB, nuHOB, earth_HOB, nuGender } = usePurple();
  return (
    <div>
      <h2>userId: {userId}</h2>
      <p>Name: {nuName}</p>
      <p>DOB: {nuDOB ? nuDOB.format("YYYY-MM-DD") : "None"}</p>
      <p>HOB: {nuHOB}</p>
      <p>Earth HOB: {earth_HOB}</p>
      <p>Gender: {nuGender}</p>
    </div>
  )
}
