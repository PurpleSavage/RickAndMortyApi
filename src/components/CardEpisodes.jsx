import React from 'react'
import img from '../assets/posterR&K.jpg'
const CardEpisodes = ({name,airDate,episode}) => {
  return (
    <div className='shadow-xl rounded-lg p-2 w-60 h-72'>
        <div className='w-full'>
            <img src={img} alt="" />
        </div>
        <div>
            <p>Name: {name}</p>
            <p>air_date: {airDate}</p>
            <p>name Episode: {episode}</p>
        </div>
    </div>
  )
}

export default CardEpisodes