"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Features/counter/counterSlice';
import { useState } from "react";
import { change } from "../Features/state/stateSlice";
export default function Home() {
  const count = useSelector((state:any) => state.counter.value);
  const name = useSelector((state:any)=>state.state.name);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleClick = ()=>{
    dispatch(change(input));
  }
  return (

    <>
        <section>

          <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
             <div className="flex flex-col justify-center gap-8   ">
                  <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
                  </h1>
                  <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
                 </p>
              <Button size="lg" asChild className="button w-full sm:w-fit"  >
                  <Link href="#events">
                     Explore Now
                      </Link>
              </Button>
             </div>

             <Image
             src="/assets/images/hero.png"
             alt="hero"
             width={1000}
             height={1000}
             className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
             
             />
          </div>
        </section>

        <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">

        <h2 className="h2-bold">
          Trust by <br/>
          Thousand of Event 
          </h2> 
        <div className="flex w-full flex-col gap-5 md:flex-row">
          SERAch
          Catefory flter
        </div>

        <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </div>
    <h1>{name}</h1>
    <input placeholder="enter the value of it " type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
    <button className="px-6 py-3 bg-slate-600 text-white rounded-md hover:bg-slate-700" onClick={handleClick}>click me toh chane vale</button>
        <div className="flex w-9/12 bg-slate-400 h-96 gap-7 justify-between ">
          <div className="bg-red-200  p-4">hello my name is ayush</div>
         <div className="bg-red-200 p-4">logo</div>
        </div>


        </section>

    </>
  );
}
