'use client'

import { FiSun, FiMoon } from 'react-icons/fi'
import { useState } from 'react'

const newCustomerPage = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className='text-4xl text-center dark:text-white font-bold dark:bg-gray-800 bg-white flex h-screen justify-center items-center'>
        New Customer Form Goes here
      </div>
      <div>
        <FiSun className='absolute top-16 right-16 w-10 h-10 text-orange-400' />
      </div>
      <button
        onClick={toggleDarkMode}
        className='absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold'
      >
        {darkMode ? 'LIGHT' : 'DARK'}
      </button>
    </div>
  )
}

export default newCustomerPage
