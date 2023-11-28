import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom';
import { Outlet,Link } from 'react-router-dom'
import img from '../assets/posterR&K.jpg'
const Home = () => {
  const {pathname} = useLocation()

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100 p-4 '>
        <Header/>
      </div>
      <section className='flex flex-1'>
        {
          pathname ==="/home"? 
          <div className='w-full flex flex-col items-center justify-center my-10'>
            <div className='  flex justify-center items-center'>
              <p className='my-auto mx-auto absolute font-bold text-xs md:text-sm lg:text-xl z-40 '>Wubba lubba dub dub!",
                <Link to='characters' className='text-emerald-200 hover:text-emerald-800 underline'>comencemos</Link> 
              </p>
              <img src={img} alt="image rick and morty" className='relative w-4/5 md:w-1/2 rounded-lg shadow-xl brightness-50'/>
            </div>
            <article className='mt-8 w-1/2'>
              <h2 className='text-center font-bold text-2xl text-lime-700 mb-4'>Rick and Morty</h2>
              <p className='text-justify'>
                "Rick and Morty" es una serie de televisión de animación para adultos creada por Justin Roiland y
                Dan Harmon. La serie se estrenó por primera vez en Adult Swim, el bloque de programación nocturno de animación de Cartoon Network, el 2 de diciembre de 2013.
              </p>
              <p className='text-justify'>
                La idea para la serie se originó a partir de un cortometraje animado llamado "The Real Animated Adventures of Doc and Mharti" que Justin Roiland creó como parodia de 
                "Back to the Future" (Regreso al Futuro), con los personajes Doc Brown y Marty McFly. Dan Harmon se unió a Roiland,
                y juntos desarrollaron la idea para convertirla en una serie completa.
              </p>
              <h3 className='text-center my-4 text-2xl text-lime-700 mb-4 font-bold'>¿De qué trata la serie animada?</h3>
              <p className='text-justify'>
                "Rick and Morty" sigue las aventuras de un científico alcohólico y cínico llamado Rick Sánchez 
                y su nieto Morty Smith, quienes viajan a través del tiempo y el espacio, explorando dimensiones 
                alternativas y enfrentándose a situaciones cómicas y a menudo peligrosas. La serie combina elementos 
                de ciencia ficción, comedia negra y humor satírico, y se ha ganado la aclamación de la crítica y una gran base 
                de fanáticos por su ingenioso guion y su capacidad para abordar temas complejos de manera humorística.
                "Rick and Morty" ha ganado varios premios, 
                incluidos los Premios Emmy, y se ha convertido en un fenómeno cultural con un seguimiento dedicado.
              </p>
            </article>
          </div>
          :
          <>
            <div className='w-1/6'>
              <Sidebar/>
            </div>
            <div className='w-5/6 ps-8 border-l-2 border-gray-100 flex flex-col items-center'> 
              <Outlet/>
            </div>
          </>
        }
      </section>
    </div>
  )
}

export default Home