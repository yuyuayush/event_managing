"use client"
import React from 'react'
import Card from '../../components/ui/Card';
import { ButtonCard } from '@/components/ui/ButtonCard';
import { ButtonDiv } from '@/components/ButtonDiv';
import { Movie } from '@/components/ui/Movie';
import MovieList from '@/components/ui/MovieList';
import { InfiniteMovingCards } from '@/components/ui/Infinite';
import  {testimonials, products, cards } from '@/lib/database/data';
import { HeroParallax } from '@/components/ui/HeroParallex';
import { LayoutGrid } from '@/components/ui/LayoutGrid';
import { LayoutGridDemo } from '@/components/ui/Grid';
const page = () => {
  const {data,setData,loading} = Movie();
  return (
    <div data-theme="cyberpunk" className=' h-screen w-full   p-28'>

      <h1 className='text-[128px] font-bold text-white text-center '>Hello Ayush!</h1>
      <p className="text-2xl text-white text-center mb-24">we are working for making things more beatifyl</p>
      <Card className="px-4 w-full xl:min-w-[1200px] " />
      <ButtonDiv/>
      <div className="h-screen w-full mt-64 grid grid-cols-1 lg:grid-cols-3 gap-3 text-white">

      {
        data!== null &&
        data.length > 0 &&
                 data?.slice(0,10)?.map((data:any,index:number)=>
          <div key={index}>
            <MovieList data={data} index={index} loading={loading}/>
          </div>
      ) 
    },
    
        
      </div>
      
      <div className="w-full bg-black text-white h-[30rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
      
      <HeroParallax products={products}/>
      <LayoutGridDemo/>
    </div>
  )
}

export default page
