"use client"
import React from 'react'
import {ImageCarousel} from '../components/ImageCarousel'
import SingleCard from '../components/SingleCard'

const NewGiftSection = () => {
  return (
    <div className='flex justify-center mt-5 flex-col items-center' id='new'>
      <div>
        <p className='text-[24px] w-[200px] font-semibold text-center text-title-color dark:text-title-color-dark'>New Gifts</p>
      </div>
      <div className='flex mt-8'>
      <ImageCarousel />
      </div>
    </div>
  )
}

export default NewGiftSection