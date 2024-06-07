import React from 'react'
import { useStore } from '@/store/useStore'
const ImageContainer = ({data}) => {
    
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:p-16 xl:gap-8 p-4 gap-4 '>
    {/* <div columnsCount={3} gutter="10px"> */}

        {data?.map((item)=>(
          <>
          <div className="w-full h-full rounded-xl   shadow-2xl shadow-black">
            

            <img className='object-contain object-center w-full h-full ' src={item} alt="" />
          </div>
          
          </>
        )
      )}
      </div>
    </div>
  )
}

export default ImageContainer
