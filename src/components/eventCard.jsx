import React from 'react'
import Image from 'next/image'
import { Button } from '.'
const EventCard = () => {
  return (
    <div className="border border-solid hover:shadow-mine rounded-xl   p-3 2xl:space-x-4 md:space-x-2 xs:space-x-0 my-6 min-h-52 justify-cenetr hover:border-[#7328f6] flex md:flex-row xs:flex-col">
            <Image
              src="/past-event.jpg"
              width={300}
              height={400}
              className="md:w-1/2 md:h-1/2 lg:h-full xs:w-full h-full lg:w-1/3 rounded-lg"
            />

            <div className="flex flex-col space-y-3 justify-between ml-1 xs:mt-3 md:mt-0">
              <h1 className="text-2xl">Chennai Trail Ultra 2024 (CTU-24)</h1>
              <div className="text-[16px] text-[#50514c]" href="">
                <i class="bi bi-geo-alt-fill text-[#50514c]mr-2 "></i> Gojan School of Business and Technology
              </div>
              <div className="text-[16px]  text-[#50514c]">
                <i class="bi bi-calendar3 text-[#50514c] mr-2"></i>01 September 2024 (Sunday)
              </div>
              
              <div  className="lg:flex justify-evenly " >
              <Button title={"View Details"} link={"/jhu"}
              classname={'text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-32 hover:bg-[#D0F700] font-bold hover:text-black'}
              />
              <Button title={"Results"} 
              link='/https://myraceindia.com/overall/2024/Chennai%20Trail%20Ultra%202024'
              classname={'text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-32 hover:bg-[#D0F700] font-bold hover:text-black'}
              />
              </div>
            </div>
          </div>
  )
}

export default EventCard;