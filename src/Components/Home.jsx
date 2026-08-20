import React from 'react'
import StartExploring from './StartExploring';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import ValueContext from '../context/Context';
import MainContent from './MainContent';
const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState('')
  const [isSearched, setIsSearched] = useState(false)
  const handleSearch = () => {
    setValue(inputValue)
    setIsSearched(true)
  }
  return (
    <ValueContext.Provider value={value}>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex flex-col items-center mt-10'>
          <div className='flex sm:flex-row flex-col sm:items-center sm:justify-center items-center sm:w-fit w-full sm:gap-5 gap-3'>
            <FaGithub className='sm:w-25 sm:h-25 h-10 w-10' />
            <h2 className='sm:text-4xl  text-3xl font-bold text-center'>GitHub Explorer</h2>
          </div>
          <p className='mt-5 text-1.5xl text-center'>Discover and visualize GitHub profiles, repositories, and statistics</p>
        </div>
        <div className='bg-amber-50 md:w-1/2 w-3/4 flex justify-between p-4 rounded-2xl'>
          <input
            type="text"
            placeholder='Enter Name'
            className='text-black grow outline-none w-3/4'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={`text-black hover:bg-pink-600 flex items-center gap-2 bg-purple-400 p-2 rounded-xl text-white disabled:opacity-50 disabled:hover:bg-purple-400`} disabled={!inputValue} onClick={handleSearch}>
            <FaMagnifyingGlass />
            <p className='sm:block hidden'>search</p>
          </button>
        </div>
      </div>
      {isSearched ? (
        <div>
          <MainContent/>
        </div>
      ) : (
        <StartExploring />
      )
      }
    </ValueContext.Provider>
  )
}

export default Home
