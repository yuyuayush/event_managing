import React from 'react'


interface ButtonProps {
    price:string;
    image:string;
    title:string;
    description:string;
}

export const ButtonCard:React.FC<ButtonProps> = ({price,image,title,description}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border h-5/6    ">
  <figure><img src={image} alt="Shoes" className='h-96 w-full  object-cover' /></figure>
  <div className="card-body text-white border  ">
    <h2 className="card-title">{title}!</h2>
    <p>{description.slice(0,100)}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> {price} Buy Now</button>
    </div>
  </div>
</div>
  )
}
