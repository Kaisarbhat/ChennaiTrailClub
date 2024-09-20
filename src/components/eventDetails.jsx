'use client'
import Image from 'next/image'
import React from 'react'
import Button2 from './Button2'

const EventDetails = () => {
  return (
    <div className='py-16 text-[#50514C]'>
        <div className='bg-[#070802] w-full px-4 py-4  pt-20 flex items-center  justify-center space-x-28'>
        <div className=' w-1/3 text-lg space-y-4'>
            <h1 className='text-[38px] text-white font-bold leading-snug'>Jawadhu Hills Ultra (JHU-24)</h1>
            <p className='text-[#FFFFFFBF]'>Jawadhu Hills Ultra is back! Experience the most scenic trails in the Eastern Ghats, weaving through the pristine hills of Jawadhu range. Challenge yourself on diverse terrains, enjoy breathtaking vistas, and immerse in the natural beauty</p>
            <div>Trail Day</div>
            <div className='text-2xl text-[#d0f700] font-bold'><i class="bi bi-calendar3 mr-2"></i>November 09, 2024 (Saturday)</div>
            <div className='text-[#FFFFFFA6] underline'> 
                <span className='text-[#d0f700] mr-2'><i class="bi bi-geo-alt-fill"></i></span >St.Joseph Higher Secondary School, Jamunamarathur <i class="bi bi-arrow-up-right"></i></div>

        </div>
        <div>
            <Image
            src = '/JHU-2024-Event.jpg'
            width={500}
            height={300}
            className='w-full rounded-xl'
            layout='responsive'
            />
        </div>
        </div>
        <div className='flex py-10 px-6 w-4/5 lg:w-3/5'>
            <aside className='border border-solid border-gray-500 rounded-xl p-3 w-1/3 space-y-3 flex flex-col justify-center'>
                <Button2 title={'General Info'}/>
                <Button2 title={'Categories'}/>
                <Button2 title={'Rules & Criteria'}/>
                <Button2 title={'Food'}/>
                <Button2 title={'Medical / Baggage'}/>
                <Button2 title={'Aid Station / Hydration'}/>
                <Button2 title={'Accomodation / Transport'}/>
                <Button2 title={'Medals,Certificates & Results'}/>
                <Button2 title={'Running Tips'}/>
            </aside>
            <div>

            </div>
        </div>
    </div>
  )
}

export default EventDetails