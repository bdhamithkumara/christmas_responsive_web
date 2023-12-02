import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NewArrivalsImage1, NewArrivalsImage2, NewArrivalsImage3, NewArrivalsImage4 } from '../../public/images/index'
import SingleCard from './SingleCard';

export const ImageCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 475 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 475, min: 0 },
            items: 1
        }
    };

    const newGiftSectionData = [
        {
            id: 1,
            image: NewArrivalsImage1,
            altText: "NewArrivalsImage1",
            price: "$95",
            title: "Reindeer",
        },
        {
            id: 2,
            image: NewArrivalsImage2,
            altText: "NewArrivalsImage2",
            price: "$20",
            title: "Snow Globe",
        },
        {
            id: 3,
            image: NewArrivalsImage3,
            altText: "NewArrivalsImage3",
            price: "$75",
            title: "Sledge",
        },
        {
            id: 4,
            image: NewArrivalsImage4,
            altText: "NewArrivalsImage4",
            price: "$18",
            title: "Christmas Wreath",
        },
    ]

    const arrayLength = newGiftSectionData.length

    const sliderData = newGiftSectionData.map((item, index) => (
        <SingleCard
            key={index}
            arrayLength={arrayLength}
            image={item.image}
            altText={item.altText}
            price={item.price}
            title={item.title}
        />
    ))

    return (
        <div className='flex justify-center items-center mb-32'>
            <Carousel className='lg:w-[800px] xs:w-[500px] w-[300px]'
                responsive={responsive}
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                shouldResetAutoplay
                showDots={false}
                slidesToSlide={1}
                swipeable >
                {sliderData}
            </Carousel>
        </div>
    )
}
