import React from 'react'

interface MovieProps {
    data:any;
    index:number;
    loading:Boolean;
}

const MovieList:React.FC<MovieProps> = ({data,index,loading}) => {
  if(loading)(
    <>
    <progress className="progress w-56"></progress>
    </>
  )
    console.log(data);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
    <figure><img src={data.big_image} alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">{data.title}</h2>
      <p>{data?.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">{data?.rating}</button>
      </div>
    </div>
  </div>
  )
}

export default MovieList
