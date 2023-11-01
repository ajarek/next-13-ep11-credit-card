'use client'

import React, { createContext, useState } from 'react'
export const PersonContext = createContext()

export const PersonContextProvider = ({ children }) => {
  const [person, setPerson] = useState({
    publisher: 'Visa',
    fullName: 'Jan Kowalski',
    number: '4242 4242 4242 4242',
    expiration: '10/24',
  })

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  )
}
