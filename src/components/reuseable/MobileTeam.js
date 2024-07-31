import React, { useState, useRef, useEffect } from 'react';
import { Teams } from '../utils/Datas';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function MobileTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = Teams.length;

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(totalItems - 1);
    }
    if (currentIndex >= totalItems) {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalItems]);

  return (
    <div>
      <section className="bg-[#000000] py-14 mt-10 md:hidden">
        <section className="px-4 sm:px-14 lg:px-24 py-14">
          <div className="flex justify-center text-center">
            <div className="w-full sm:w-[600px] lg:w-[800px]">
              <p className="font-sedan uppercase">Our team</p>
              <p className="font-space text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
                Meet the Faces Behind SHYNE Band
              </p>
              <p className="font-inter mt-4 md:mt-8 leading-6 md:leading-7">
                we provide software for the financial and operational needs of today’s<br />
                founders so they can get back to doing what they do best-building
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {Teams.map((team, index) => (
              <div
                key={team.name}
                className={`font-inter flex flex-col justify-center items-center text-left w-full sm:w-[40%] md:w-[30%] lg:w-[23%] mt-8 lg:mt-16 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ display: index === currentIndex ? 'flex' : 'none' }}
              >
                <img src={team.img} alt={team.name} />
                <p className="text-[#ECECEC] text-lg md:text-xl mt-3">{team.name}</p>
                <p className="text-[#65676C] mt-2">{team.position}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-5">
            {Array.from({ length: totalItems }).map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-400'}`}
              ></span>
            ))}
          </div>
        </section>
        <div className='flex justify-center gap-10 mt-2 md:hidden'>
          <button onClick={scrollLeft} className='border p-3 rounded-full'>
            <FaAngleLeft className='text-2xl' />
          </button>
          <button onClick={scrollRight} className='border p-3 rounded-full'>
            <FaAngleRight className='text-2xl' />
          </button>
        </div>
      </section>
    </div>
  );
}

export default MobileTeam;