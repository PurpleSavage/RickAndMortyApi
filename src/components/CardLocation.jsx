
import img from '../assets/posterR&K.jpg'
const CardLocation = ({name,type,dimension}) => {
  return (
    <div className='shadow-xl rounded-lg p-2 w-60 h-72'>
        <div className='w-full'>
            <img src={img} alt="" />
        </div>
        <div>
            <p>Name: {name}</p>
            <p>type Location: {type}</p>
            <p>Dimension: {dimension}</p>
        </div>
    </div>
  )
}

export default CardLocation