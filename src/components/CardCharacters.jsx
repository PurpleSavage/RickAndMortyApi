import React from 'react'

const CardCharacters = ({img,name,gender,species,status}) => {
  return (
    <div className='shadow-xl rounded-lg p-2'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Status: <span className={`${status === "Alive" ? 'text-emerald-500' : 'text-red-300'}`}>{status}</span></p>
        </div>
    </div>
  )
}

export default CardCharacters