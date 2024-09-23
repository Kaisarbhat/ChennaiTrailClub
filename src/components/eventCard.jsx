import React from 'react'
import Image from 'next/image'
import { Button1 } from '.'
const EventCard = () => {
  return (
    <div className="border border-solid hover:shadow-mine rounded-xl  flex p-3 space-x-2 my-6 min-h-52 justify-between hover:border-[#7328f6]">
            <Image
              src="/new-events-1.png"
              width={300}
              height={400}
              className="w-2/5 h-full"
            />

            <div className="flex flex-col justify-between ml-1">
              <h1 className="text-2xl">Jawadhu Hills Ultra (JHU-24)</h1>
              <div className="text-[16px]  text-[#50514c]">
                <i class="bi bi-calendar3 text-[#D0F700]"></i> 09 November 2024
                (Saturday)
              </div>
              <a className="text-[16px] underline text-[#50514c]" href="">
                <i class="bi bi-geo-alt-fill text-[#D0F700] "></i> St.Joseph
                Higher Secondary School, Jamunamarathur
              </a>
              <div  className="lg:flex justify-evenly" >
              <Button1 title={"View Details"} link={"/jhu"} />
              <Button1 title={"Results"} />
              </div>
            </div>
          </div>
  )
}

export default EventCard