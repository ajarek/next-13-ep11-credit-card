import React from 'react'

const CardForm = ({ handleSubmit }) => {
  return (
    <form
      className='p-4  flex flex-col gap-5 '
      onSubmit={handleSubmit}
    >
      <div className='container'>
        <label htmlFor='name'>Wydawca Karty</label>
        <select
          name=''
          id=''
        >
          <option value='Visa'>Visa</option>
          <option value='MasterCard'>MasterCard</option>
        </select>
      </div>
      <div className='container'>
        <label htmlFor='name'>Imie i Nazwisko</label>
        <input
          type='text'
          placeholder='Jan Nowak'
          required
          autoFocus
        />
      </div>
      <div className='container'>
        <label htmlFor='email'>Nr karty</label>
        <input
          type='text'
          placeholder='4242 4242 4242 4242'
          pattern='^(?:\d{4} ){3}\d{4}$'
          required
        />
      </div>
      <div className='container'>
        <label htmlFor='message'>Data ważności</label>
        <input
          type='text'
          placeholder='10/2024'
          pattern='^(0[1-9]|1[0-2])\/20[2-9][0-9]$'
          required
        />
      </div>
      <div className='flex justify-end'>
        <button
          type='submit'
          className='border-none px-4 py-2 rounded-sm bg-sky-500 hover:bg-sky-600 transition'
        >
          Wyślij
        </button>
      </div>
    </form>
  )
}

export default CardForm
