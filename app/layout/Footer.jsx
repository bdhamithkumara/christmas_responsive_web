"use client"
import React from 'react'
import Image from 'next/image'
import {Logo , FooterGreenBulb ,FooterRedBulb,GooglePlay,AppleApp } from '../../public/images/index'

const Footer = () => {
  return (
    <div>
      <div className='flex lg:justify-center mx-auto mb-5 lg:mb-20 xs:w-[450px] lg:w-[auto] w-[312px]'>
        <div className='grid lg:grid-cols-4 lg:gap-32 gap-10 grid-flow-row xs:ml-5 lg:ml-0'>

          <div>
            <div className='flex mb-6'>
            <Image src={Logo} alt='logo' className='w-[24px] h-[24px]'/>
            <p className='xs:text-[16px] text-[15px] font-normal text-title-color dark:text-title-color-dark'>Christmas</p>
            </div>
            <div>
              <p className='text-text-color text-[13px] xs:text-[14px] xs:w-[145px] w-[135px] dark:text-text-color-dark'>This Christmas give a lot of love</p>
            </div>
          </div>

          <div className='dark:text-title-color-dark text-title-color'>
            <div className='mb-6'>
            <p className='xs:text-[20px] text-[16px] font-semibold'>Our Services</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Pricing</p>
            </div>
            <div>
              <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Discounts</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Shipping mode</p>
            </div>
          </div>

          <div className='dark:text-title-color-dark text-title-color' >
            <div className='mb-6'>
            <p className='xs:text-[20px] text-[16px] font-semibold dark:text-title-color-dark text-title-color'>Support</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>FAQs</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Support center</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Contact Us</p>
            </div>
          </div>
          
          <div>
            <div className='mb-6'>
              <p className='xs:text-[20px] text-[16px] font-semibold dark:text-title-color-dark text-title-color'>Available On</p>
            </div>
            <div>
              <Image src={GooglePlay} alt='GooglePlay' className='w-[100px] h-[30px] mb-2'/>
            </div>
            <div>
            <Image src={AppleApp} alt='AppleApp' className='w-[100px] h-[35px]' />
            </div>
          </div>
        </div>

        <div className='flex lg:flex-row justify-center xs:flex-col lg:invisible visible'>
        <div className='absolute xs:ml-[90px] xs:mt-[-80px] ml-[180px] mt-[150px]'>
          <Image  src={FooterGreenBulb} alt='GreenBulb' className='w-[120px] h-[132px]'/>
        </div>
        <div className='absolute xs:ml-[165px] xs:mt-[500px] ml-[400px] mt-[450px]'>
          <Image src={FooterRedBulb} alt='RedBulb' className='min-w-[120px] h-[142px]'/>
        </div>
        </div>

      </div>
      <div className='flex lg:flex-row justify-center mb-10 xs:flex-col lg:visible invisible'>
          <div className='absolute lg:mr-[820px] lg:mt-[-100px]'>
            <Image src={FooterGreenBulb} alt='GreenBulb' className='w-[120px] h-[132px]'/>
          </div>
          <div className='absolute lg:ml-[1050px] lg:mt-[-150px]'>
            <Image src={FooterRedBulb} alt='RedBulb' className='min-w-[120px] h-[142px]'/>
          </div>
      </div>
    </div>
  )
}

export default Footer