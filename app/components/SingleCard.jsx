"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import {NewArrivalsImage2} from '../../public/images/index'

const SingleCard = (props) => {
    const [isLiked,setIsLiked] = useState(false)

    const handleLikeClick = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked)
    }

  return (
    <div>
        <div className='flex justify-center'>
            <div className='mb-2 max-w-[230px] h-[278px] rounded-xl shadow-lg bg-container-color dark:bg-container-color-dark'>
                <div className='bg-first-color w-[230px] h-[180px] flex items-center justify-center rounded-bl-[100px] rounded-br-[100px] rounded-t-xl'>
                    <Image src={props.image} alt={props.altText} className='w-[150px] h-[150px]'/>
                </div>
                <div className='text-center mt-5'>
                    <div>
                        <p className='text-[20px] font-semibold dark:text-title-color-dark text-title-color'>{props.price}</p>
                    </div>
                    <div>
                        <p className='text-[15px] font-normal text-text-color dark:text-text-color-dark'>{props.title}</p>
                    </div>
                </div>
                <div className='float-right mt-[-3px]'>
                    <div className='w-[28px] h-[28px] bg-first-color flex justify-center items-center rounded-br-xl cursor-pointer' onClick={handleLikeClick}>
                        {isLiked ?
                            (<BsHeartFill className='w-[20px] h-[20px] text-white'/>) 
                            : 
                            (<BsHeart className='w-[20px] h-[20px] text-white'/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleCard