"use client"
import React , {useState} from 'react'
import {GiftSectionImage1,GiftSectionImage2,GiftSectionImage3,GiftSectionImage4,GiftSectionImage5} from '../../public/images/index'
import Image from 'next/image'
import {BsHeart , BsHeartFill} from 'react-icons/bs'

const GiftSectionData = [

  {
    id : 1,
    image: GiftSectionImage1,
    altText : "GiftSection Image 1 ",
    price : "$15",
    title : "Gingerbread",
  },
  {
    id : 2,
    image: GiftSectionImage2,
    altText : "GiftSection Image 2 ",
    price : "$22",
    title : "Santa Claus Hat",
  },
  {
    id : 3,
    image: GiftSectionImage3,
    altText : "GiftSection Image 3 ",
    price : "$48",
    title : "Christmas Tree",
  },
  {
    id : 4,
    image: GiftSectionImage4,
    altText : "GiftSection Image 4 ",
    price : "$35",
    title : "Snowman",
  },
  {
    id : 5,
    image: GiftSectionImage5,
    altText : "GiftSection Image 5 ",
    price : "$12",
    title : "Candy Stick",
  },

];

const GiftSection = () => {

  const [fav , setFav] = useState(Array(GiftSectionData.length).fill(false));

  const handleClick = (index) => {
    const newFav = [...fav];
    newFav[index] = !newFav[index]
    setFav(newFav);
  }

  return (
    <div id='gifts' className='flex justify-center mt-24 flex-col items-center mb-5'>
      <div>
        <p className='text-[24px] w-[200px] font-semibold text-center text-title-color dark:text-title-color-dark'>Share A Gift</p>
      </div>
      <div className='grid lg:mt-8 mt-4 grid-cols-2 lg:grid-cols-3'>
        {GiftSectionData.map((Gift_Section_Data,index) => (

          <div key={Gift_Section_Data.id} className='items-center flex flex-col xs:mx-4 xs:my-4 my-5 mx-5 xs:w-[200px] xs:h-[247px] w-[144px] h-[192px] rounded-xl shadow-lg bg-container-color dark:bg-container-color-dark'>
          <div className='mt-4'>
            <div onClick={() => handleClick(index)}>
              {fav[index] ? 
                (<BsHeartFill className='w-[20px] h-[20px] text-first-color float-right absolute xs:ml-[60px] xs:mt-[5px] ml-[40px] mt-[1px]'/>)
                :
                (<BsHeart className='w-[20px] h-[20px] text-first-color float-right absolute xs:ml-[60px] xs:mt-[5px] ml-[40px] mt-[1px]'/>)
              }
            </div>
          </div>
          <div>
            <Image src={Gift_Section_Data.image} alt={Gift_Section_Data.altText} className='xs:w-[120px] xs:h-[120px] w-[100px] h-[100px] m-5' />
          </div>
          <div className='xs:w-[160px] w-[120px] xs:mt-[-10px] mt-[-28px]'>
            <div>
              <p className='text-[16px] xs:text-[20px] font-semibold dark:text-title-color-dark text-title-color'>
                {Gift_Section_Data.price}
              </p>
            </div>
            <div>
              <p className='text-[13px] xs:text-[14px] font-normal text-text-color dark:text-text-color-dark mt-1'>
                {Gift_Section_Data.title}
              </p>
            </div>
          </div>
        </div>

        ))}
      </div>
    </div>
  )
}

export default GiftSection