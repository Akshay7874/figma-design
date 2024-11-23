import React from 'react'
import Images from '../../assets/images.png'

const Hero = () => {
    return (
        <div className='h-[548px] border w-full flex '>
            <div className='flex flex-col w-full h-full items-start justify-center gap-10'>
                <p className='text-7xl font-semibold text-[#1D2026]'>Learn with expert anytime anywhere</p>
                <p className='text-[#4E5566] text-2xl'>Our mision is to help people to find the best course online and learn with expert anytime, anywhere.</p>
                <button>Create Account</button>
            </div>
            <div className='w-full h-full'>
                <img src={Images} alt='hero' />
            </div>
        </div>
    )
}

export default Hero