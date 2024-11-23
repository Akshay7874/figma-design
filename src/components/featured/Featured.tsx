import React from 'react'

const Featured = () => {
    return (
        <div className='flex gap-6 items-center justify-center px-[150px] my-[100px]'>
            <div className="w-1/2 flex flex-col items-start p-10 gap-3 bg-[#FF6636] text-white">
                <p className='text-3xl font-semibold'>Become an instructor</p>
                <p className='text-sm'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                <button className='px-6 py-3 bg-white text-[#FF6636]'>Start Teaching</button>
            </div>
            <div className="w-1/2 flex flex-col items-start p-10 gap-5 text-[#1D2026] grid grid-cols-2 gap-4">
                <p className='text-base text-[#1D2026] flex gap-3 items-center justify-center'><span className='flex items-center justify-center min-h-[52px] min-w-[52px] rounded-full bg-[#EBEBFF] text-[#564FFD]'>1</span>Apply to become instructor</p>
                <p className='text-base text-[#1D2026] flex gap-3 items-center justify-center'><span className='flex items-center justify-center min-h-[52px] min-w-[52px] rounded-full bg-[#EBEBFF] text-[#564FFD]'>1</span>Apply to become instructor</p>
                <p className='text-base text-[#1D2026] flex gap-3 items-center justify-center'><span className='flex items-center justify-center min-h-[52px] min-w-[52px] rounded-full bg-[#EBEBFF] text-[#564FFD]'>1</span>Apply to become instructor</p>
                <p className='text-base text-[#1D2026] flex gap-3 items-center justify-center'><span className='flex items-center justify-center min-h-[52px] min-w-[52px] rounded-full bg-[#EBEBFF] text-[#564FFD]'>1</span>Apply to become instructor</p>
            </div>
        </div>
    )
}

export default Featured