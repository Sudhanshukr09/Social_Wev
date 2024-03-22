import React from 'react'
import Pfphoto from '../Assets/pf.jpeg'
import { IoMdPhotos } from "react-icons/io";
import { FaUserTag, FaLocationDot, FaFaceSmile} from "react-icons/fa6";

const Topfeed = () => {
  return (
    <div className='border-2 select-none px-5 py-5 mt-5 rounded-lg shadow-[0_1px_7px_rgb(0,0,0,0.2)]'>
      <div className='flex gap-1 pb-4 text-xs border-b-[1.4px] border-gray-400'>
        <img className='rounded-full h-10 border' src={Pfphoto} alt="Profile" />
        <input className='w-[15rem] focus:outline-none'  type="text" placeholder='What is in your mind Dholu?' />
      </div>
      <div className='flex justify-between items-center mt-4 mb-6'>
      <div className='flex text-sm font-medium gap-4'>
        <p className='flex items-center  gap-1'><IoMdPhotos className='text-red-600' />Photo or Video</p>
        <p className='flex items-center gap-1'><FaUserTag className='text-blue-700' />Tag</p>
        <p className='flex items-center gap-1'><FaLocationDot className='text-green-700' />Location</p>
        <p className='flex items-center gap-1'><FaFaceSmile className='text-yellow-500' />
Feelings</p>
      </div>
      <button className='bg-green-500 px-1 text-sm rounded text-white font-medium'>Share</button>
      </div>
    </div>
  )
}

export default Topfeed
