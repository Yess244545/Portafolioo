import React from 'react'

function Home() {
  return (
    <div>
        {/* --------------------------------- */}
        <div className="flex  h-[calc(100vh_-_128px)] font-cantora">
            <div className="container m-auto text-center ">
            <div className="">
                <div><h2 className='text-3xl'>Hola, Mi nombre es: </h2></div>
                <div><h2 className='text-7xl py-2 text-font-base'>Yessenia Medina</h2></div>
                <div><h2 className='text-3xl'>Soy desarrollador Full Stack </h2></div>
            </div>
            <div className='pt-12'>
                <a href="https://drive.google.com/file/d/1BDsNF-uorZjCoXp0V6oP9o9-Z6oi68N8/view?usp=sharing" target="_blank" class="relative px-6 py-3 font-bold text-font-base group">
                  <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-button group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full border-3 border-font-base"></span>
                  <span class="relative py-2.5 px-5 text-xl">Descargar mi CV</span>
                </a>
            </div>
            </div>
        {/* --------------------------------- */}
    </div>
    

            

        
    </div>
  )
}

export default Home