import React from 'react'

const CredentialsTab = () => {
    return (
        <div>
            <div className='flex text-white text-[15px] max-[620px]:text-[12px] justify-start items-center gap-x-2'>
                <p className='text-white'>Web Development ABC University, LA , CA:</p>
                <span>2011</span>
            </div>
            <div className='flex text-white text-[15px] max-[620px]:text-[12px] justify-start items-center gap-x-2'>
                <p className='text-white'>Computer Science Diploma - Technical Institute:</p>
                <span>2012</span>
            </div>
            <div className='flex text-white text-[15px] max-[620px]:text-[12px] justify-start items-center gap-x-2'>
                <p className='text-white'>Certified Graphic Designer: ABC Institute</p>
                <span>2006</span>
            </div>
        </div>
    )
}

export default CredentialsTab