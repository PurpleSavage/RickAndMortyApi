import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/RickMortyBackground.jpg'
const Inicio = () => {
  return (
    <div className='min-h-screen bg-slate-200 flex justify-center items-center'>
      <div className='w-4/5 md:w-3/5  bg-slate-50 shadow-2xl rounded-md flex md:flex-row flex-col items-center justify-around p-4'>
        <section className='my-auto p-2'>
          <h3 className=' font-bold'>Ricky&Morty api by JeanPaul</h3>
          <h1 className='font-bold text-4xl'>Front-end Developer</h1>
          <p className=' mb-4 font-bold text-sm'>React - Context - Tailwindcss</p>
          <h2 className='text-slate-400 mb-4'>Wubba lubba dub dub!,To live is to risk it al</h2>
          <Link 
            className=' p-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors'
            to='/home'
          >Let's go</Link>
        </section>
        <div className='w-1/2 md:w-2/5 shadow-2xl'>
          <img src={img} alt="img-rick" className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}

export default Inicio