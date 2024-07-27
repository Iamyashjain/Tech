import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cr_Carousel = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:8080/course/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON({ query: searchQuery }),
      });

      if (!response.ok) {
        throw new Error(HTTP error! Status: ${response.status});
      }

      const searchData = await response.JSON();
      // Handle the search data from the backend as needed
      console.log(searchData);
    } catch (error) {
      console.error('Error searching:', error.message);
      // Handle error
    }
  };

  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper cr_carousel_css z-0"
      >
        <SwiperSlide><img src="./img/cr1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr3.webp" alt="" /></SwiperSlide>
      </Swiper>

      <div className='my-3 container flex justify-center place-content-center mx-2'>
        <div className='text-center py-auto flex '>
          <input
            type="text"
            placeholder='Search Content'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='py-2 px-2 outline-none text-lg font-semibold'
          />
          <Link
            to=''
            onClick={handleSearch}
            className='text-center py-2 px-5 text-black bg-orange-600 text-lg flex font-semibold'
          >
            <FaSearch className='my-auto' />
            Search
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cr_Carousel;
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cr_Carousel = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:8080/course/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON({ query: searchQuery }),
      });

      if (!response.ok) {
        throw new Error(HTTP error! Status: ${response.status});
      }

      const searchData = await response.JSON();
      // Handle the search data from the backend as needed
      console.log(searchData);
    } catch (error) {
      console.error('Error searching:', error.message);
      // Handle error
    }
  };

  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper cr_carousel_css z-0"
      >
        <SwiperSlide><img src="./img/cr1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr3.webp" alt="" /></SwiperSlide>
      </Swiper>

      <div className='my-3 container flex justify-center place-content-center mx-2'>
        <div className='text-center py-auto flex '>
          <input
            type="text"
            placeholder='Search Content'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='py-2 px-2 outline-none text-lg font-semibold'
          />
          <Link
            to=''
            onClick={handleSearch}
            className='text-center py-2 px-5 text-black bg-orange-600 text-lg flex font-semibold'
          >
            <FaSearch className='my-auto' />
            Search
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cr_Carousel;