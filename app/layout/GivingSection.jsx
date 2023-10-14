"use client"
import React from 'react'
import {GivingSectionImage1, GivingSectionImage2, GivingSectionImage3} from '../../public/images/index'
import Image from 'next/image'

const GivingSectionData = [
  {
    id : "1",
    image : GivingSectionImage1,
    altText : "Giving Section Image 1",
    title : "Surprise gifts",
    description : "They are the best gifts there is.",
  },
  {
    id : "2",
    image : GivingSectionImage2,
    altText : "Giving Section Image 2",
    title : "Ornaments",
    description : "Give a moment to decorate",
  },
  {
    id : "3",
    image : GivingSectionImage3,
    altText : "Giving Section Image 3",
    title : "Lots of love",
    description : "Give away feelings that last forever",
  }
];


const GivingSection = () => {
  return (
    <div>
      <div className='flex justify-center mt-24 flex-col items-center'>
        <div>
          <p className='text-[24px] w-[200px] font-semibold text-center text-title-color dark:text-text-color-dark'>
          Start Giving This Christmas
          </p>
        </div>
        <div className='grid lg:mt-16 mt-8 grid-cols-2 lg:grid-cols-3'>
          {GivingSectionData.map((Giving_Section_Data) => (
            <div key={Giving_Section_Data.id} className='text-center items-center flex justify-center flex-col lg:mx-12 md:mx-8 mx-5 cursor-pointer'>
            <div>
              <Image src={Giving_Section_Data.image} alt={Giving_Section_Data.altText} className='xs:w-[120px] xs:h-[120px] w-[100px] h-[100px] m-5'/>
            </div>
            <div>
              <p className='text-[16px] xs:text-[16px] font-semibold dark:text-title-color-dark text-title-color'>{Giving_Section_Data.title}</p>
            </div>
            <div>
              <p className='text-[13px] xs:text-[14px] w-[150px] font-normal text-text-color dark:text-text-color-dark mt-1'>{Giving_Section_Data.description}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GivingSection