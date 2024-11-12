import React from 'react'

const ExperienceTab = () => {
    return (
        <div>
            <div className='flex text-white text-[15px] max-[620px]:text-[12px] justify-start items-center gap-x-2'>
                <p className='text-white'>UI/UX Designer - XYZ Company:</p>
                <span>2012 - 2023</span>
            </div>
            <div className='flex text-white text-[15px] max-[620px]:text-[12px] justify-start items-center gap-x-2'>
                <p className='text-white'>Web Developer - ABC Agency:</p>
                <span>2010 - 2012</span>
            </div>
            <div className='flex text-white text-[15px] max-[620px]:text-[12px] justify-start items-center gap-x-2'>
                <p className='text-white'>Intern - DEF Corporation:</p>
                <span>2008 - 2010</span>
            </div>
        </div>
    )
}

export default ExperienceTab