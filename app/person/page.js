'use client'

import { useRouter } from 'next/navigation'
import CardForm from '@/components/CardForm'
import React, { useContext } from 'react'
import { PersonContext } from '@/context/PersonContext'

const Person = () => {
  const { setPerson } = useContext(PersonContext)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPerson = {
      publisher: e.target[0].value,
      fullName: e.target[1].value,
      number: e.target[2].value,
      expiration: e.target[3].value,
    }
    setPerson(newPerson)
    ;(e.target[0].value = ''),
      (e.target[1].value = ''),
      (e.target[2].value = ''),
      (e.target[3].value = '')

    router.push('/')
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24 max-sm:p-4'>
      <CardForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default Person
