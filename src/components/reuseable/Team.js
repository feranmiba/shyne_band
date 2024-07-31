import React from 'react'
import { Teams } from '../utils/Datas'


function Team() {
  return (
    <div>
    <section className="bg-[#000000] py-14 mt-10 hidden md:block">
  <section className="px-4 sm:px-14 lg:px-24 py-14">
    <div className="flex justify-center text-center">
      <div className="w-full sm:w-[600px] lg:w-[800px]">
        <p className="font-sedan uppercase">Our team</p>
        <p className="font-space text-2xl md:text-3xl lg:text-4xl font-bold mt-3">Meet the Faces Behind SHYNE Band</p>
        <p className="font-inter mt-4 md:mt-8 leading-6 md:leading-7">we provide software for the financial and operational needs of today’s<br />
          founders so they can get back to doing what they do best-building
        </p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center lg:justify-between sm:gap-10 lg:gap-0 ">
      {Teams.map((team) => (
        <div key={team.name} className="font-inter flex flex-col justify-center text-left w-full sm:w-[40%] md:w-[30%] lg:w-[23%] mt-8 lg:mt-16">
          <img src={team.img} alt={team.name}  />
          <p className="text-[#ECECEC] text-lg md:text-xl mt-3">{team.name}</p>
          <p className="text-[#65676C] mt-2">{team.position}</p>
        </div>
      ))}
    </div>
  </section>
</section>

    </div>
  )
}

export default Team