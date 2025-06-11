import React from 'react'
import { IoPerson } from "react-icons/io5";


export default function Staff_listbox() {

  return (
    <div>
        <a className='box flex justify-between items-center border border-[#FFDD4A]' href='/staff-profile'>
                    <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                        <img 
                            className='w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full' 
                            src="/images/user1.jpg"
                            alt="Member"
                        />
                        <span className='flex flex-col gap-1 md:gap-5 text-sm sm:text-xl lg:text-2xl'>
                            <h3 className='font-semibold'>Ritwik k</h3>
                            <h4>tt-123</h4>
                        </span>
                    </div>
                    <span className='flex gap-1 md:gap-2 justify-center items-center text-xl sm:text-3xl md:text-4xl font-bold'>
                        <IoPerson className='text-[#FFDD4A]' />
                        <h2>10</h2>
                    </span>

                    <span className='md:flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl hidden'>
                        <button className='bg-[#232024] px-10 py-5 rounded-lg border-1 text-center' href="#">
                            Mark attanadace
                        </button>
                    </span>
                </a>
                
        <a className='box flex justify-between items-center border border-[#FFDD4A]' href='/member-profile'>
                    <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                        <img 
                            className='w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full' 
                            src="/images/user1.jpg"
                            alt="Member"
                        />
                        <span className='flex flex-col gap-1 md:gap-5 text-sm sm:text-xl lg:text-2xl'>
                            <h3 className='font-semibold'>Ritwik k</h3>
                            <h4>tt-123</h4>
                        </span>
                    </div>
                    <span className='flex gap-1 md:gap-2 justify-center items-center text-xl sm:text-3xl md:text-4xl font-bold'>
                        <IoPerson className='text-[#FFDD4A]' />
                        <h2>10</h2>
                    </span>

                    <span className='md:flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl hidden'>
                        <button className='bg-[#232024] px-10 py-5 rounded-lg border-1 text-center' href="#">
                            Mark attanadace
                        </button>
                    </span>
                </a>
                
        <a className='box flex justify-between items-center border border-[#FFDD4A]' href='/member-profile'>
                    <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                        <img 
                            className='w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full' 
                            src="/images/user1.jpg"
                            alt="Member"
                        />
                        <span className='flex flex-col gap-1 md:gap-5 text-sm sm:text-xl lg:text-2xl'>
                            <h3 className='font-semibold'>Ritwik k</h3>
                            <h4>tt-123</h4>
                        </span>
                    </div>
                    <span className='flex gap-1 md:gap-2 justify-center items-center text-xl sm:text-3xl md:text-4xl font-bold'>
                        <IoPerson className='text-[#FFDD4A]' />
                        <h2>10</h2>
                    </span>

                    <span className='md:flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl hidden'>
                        <button className='bg-[#232024] px-10 py-5 rounded-lg border-1 text-center' href="#">
                            Mark attanadace
                        </button>
                    </span>
                </a>
                
    </div>
  )
}
