import React from 'react'
import { ButtonCard } from './ui/ButtonCard'

interface Shoe {
    id: number,
    name: string,
    price: number,
    image: string,
    description:string,
}
export const ButtonDiv = () => {

    const shoes:Shoe[] = [
        {
            id: 1,
            name: 'Nike',
            price: 1000,
            image: 'https://imgs.search.brave.com/hnOybKadYQszzi0Sv3zC-P-2u8V_AcMVQScVTBIlKro/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGVz/aG9lY29kZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvMl9iNzhjYTIz/MS0yMzhmLTRjOTQt/ODY2Ni1hMWI5MWJi/YTMxOGJfNTMzeC5q/cGc_dj0xNjk0Njg2/Nzk2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '
        },{
            id: 2,
            name: 'Adidas',
            price: 2000,
            image: 'https://imgs.search.brave.com/DJ9NxydDfWEnbhY0sbzE_k_DGn7F7IjwcEeZC54hN38/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDUzNDg1MzI3NjAt/Njc1M2QyYzQzMzI5/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFlt/eGhZMnNsTWpCemFH/OWxmR1Z1ZkRCOGZE/QjhmSHd3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '
        },{
            id: 3,
            name: 'Puma',
            price: 3000,
            image: 'https://imgs.search.brave.com/LEHygaSDMavYNiQ587ltlS0Fp7DvMDPcIOCtHp0OvVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDgzNzk4OTQ0NTMt/YzZiNzI5YjA1NTk2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OGQy/aHBkR1VsTWpCemFH/OWxjM3hsYm53d2ZI/d3dmSHg4TUE9PQ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '
        },{
            id: 4,
            name: 'Reebok',
            price: 4000,
            image: 'https://imgs.search.brave.com/RSAnxFN1OcHltFetn9GZqdsRUoibPptDrKOPrjbV1FI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzQ5NDY5NDMxNzIt/NDgwMGZlYWRmYWI3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRaOGZH/SnNZV05ySlRJd2My/aHZaWHhsYm53d2ZI/d3dmSHg4TUE9PQ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '
        }
    ]



  return (
<div className='  flex  justify-content-center gap-12 my-8 px-3 h-screen  flex-wrap'>
{shoes.map(({ id, name, price, image, description }) => (
        <ButtonCard
          key={id}
          image={image}
          title={name}
          description={description}
          price={`${price}`}
        />
      ))}


    </div>
  )
}
