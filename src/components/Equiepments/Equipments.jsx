import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'

const Equipments = () => {

    const EquipmentData=[
        {
            id:1,
            title:'Yoga Equipments',
            desc:'It is along established fact that s reader will be by readable content',
            icon:<GrYoga />,
            delay:0.3
        },
        {
            id:2,
            title:'Muscle Equipments',
            desc:'It is along established fact that s reader will be by readable content',
            icon:<FaDumbbell />,
            delay:0.3
        },
        {
            id:3,
            title:'Fitness Equipments',
            desc:'It is along established fact that s reader will be by readable content',
            icon:<GiGymBag />,
            delay:0.3
        },
    ]

  return (
    <div>
        <div className='container py-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair'>
                <div className='space-y-4 p-4'>
                    <h1 className='text-3xl md:text-4xl font-bold'>What we offer for you?</h1>
                    <p className='text-gray-500'>It is along established fact that s reader 
                        will be by readable content.
                    </p>
                </div>
                {
                    EquipmentData.map((item)=>{
                        return(
                            <div className='space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-lg hover:shadow-md duration-300'>
                                <div className='text-4xl'>{item.icon}</div>
                                <p className='text-2xl font-semibold'>{item.title}</p>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Equipments