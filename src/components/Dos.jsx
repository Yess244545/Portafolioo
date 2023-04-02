import React from 'react'

const Dos = (props) => {
  return (
    <div className=' flex-1 pb-5 lg:px-10'>
      
        <div className='border border-app-grayLight shadow-lg  text-center bg-base '>
            <div className=''>
              <img src={props.image} alt=""className='' width="" />
            </div>
            <div className=''>
              <h2 className='text-2xl pb-3 font-semibold text-font-base'>{props.title}</h2>
              <div className='flex justify-center gap-2 pb-3'>
                <img src="/public/react.png" alt="" className='bg-button rounded-full' />
                <img src="/public/javascript.png" alt="" className='bg-button rounded-full' />
                <img src="/public/css.png" alt="" className='bg-button rounded-full' />
              </div>
              <div className='flex gap-2 justify-center pb-3 text-base'>
                <a href={props.url} target="_blank" className='py-2.5 px-5 max-sm:px-0  font-medium text-font-base  bg-button rounded-lg border border-font-base hover:bg-font-base hover:text-red-50 '>Proyecto</a>
                <a href={props.git} target="_blank" className='py-2.5 px-5 max-sm:px-0 font-medium text-font-base  bg-button rounded-lg border border-font-base hover:bg-font-base hover:text-red-50 '>Código</a>
                
              </div>
            </div>
          </div>
          
    </div>
  )
}

export default Dos