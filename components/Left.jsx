import React from 'react'
import { FaReact, FaHome, FaUser, FaHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/ai';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io';

const Left = () => {
    const obj = [
    'home',"people","contact","address","profile","help us","website"
  ]
    const iconArray = [
    <FaReact />,
    <FaHome />,
    <FaUser />,
    <FaHeart />,
    <AiOutlineShoppingCart />,
    <AiFillStar />,
    <MdEmail />,
    <MdPhone />,
    <IoLogoTwitter />,
    <IoLogoGithub />
  ];
  return (
    <>
      <div className="py-10 bg-black min-w-[240px] flex flex-col text-white">
        <ul className='flex flex-col w-full h-full  px-10 py-10 xl:gap-8 bg-black'>
      {obj.map((item,index)=>(
        <li key={`Date.now()-index`} className="text-2xl font-mono capitalize   hover:bg-white px-4 py-1 rounded-md">
          <span className='flex gap-5 text-red-700 font-bold  '> 
            {iconArray[index]}
          {item}
          </span>
        </li>
      ))}
      </ul>
      </div>
    </>
  )
}

export default Left
