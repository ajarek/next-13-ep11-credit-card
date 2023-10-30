'use client'

import CardForm from '@/components/CardForm'
import React, { useState } from 'react'

const Person = () => {
  const[person, setPerson]=useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPerson={
 publisher:e.target[0].value, 
 fullName:e.target[1].value ,
 number:e.target[2].value, 
 expiration :e.target[3].value 
    }
    setPerson(newPerson)
  }
  console.log(person);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <CardForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Person