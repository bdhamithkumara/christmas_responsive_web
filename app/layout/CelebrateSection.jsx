"use client"
import React from 'react'
import {CelebrateSectionImage} from '../../public/images/index'
import Image from 'next/image'

const CelebrateSection = () => {
  return (
    <div id='celebrate' className='flex justify-center lg:flex-row flex-col items-center text-center lg:text-start mt-16 xs:mt-20 lg:mt-10'>
      <div className='my-auto sm:w-[400px]'>
        <div className='justify-center lg:justify-start flex'>
          <p className='text-[20px] xs:text-[24px] font-semibold xs:w-[220px] w-[200px] leading-tight text-title-color dark:text-title-color-dark'>Celebrate With A Lot Of Love</p>
        </div>
        <div className='flex justify-center lg:justify-start'>
          <p className='text-[15px] xs:text-[16px] w-[315px] xs:w-[330px] lg:w-[350px] font-normal text-text-color mt-5 dark:text-text-color-dark'>In this holidays, celebrate with much love and peace, offering many blessings to our loved ones, friends and neighbors, wishing them a good Christmas message.</p>
        </div>
        <div className='flex justify-center items-center lg:justify-start'>
          <div className='rounded-[64px] w-fit h-auto bg-first-color px-12 py-4 text-[15px] xs:text-[16px] font-medium text-white mt-10 cursor-pointer'>
          Send Good Wishes
          </div>
        </div>
      </div>
      <div>
        <Image src={CelebrateSectionImage} alt='CelebrateSection Image' className='xs:w-[450px] xs:h-[450px] w-[280px] h-[280px]' />
      </div>
    </div>
  )
}

export default CelebrateSection