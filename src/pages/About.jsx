import React from 'react'

function About(props) {
  return (
    <div className='font-cantora py-14 px-[100px] text-center max-lg:px-5'>
      {/*-----Sobre mí---- */}
      <div>
      <div>
        <h1 className='text-5xl py-3 font-semibold'>Sobre Mí</h1>
        <p className='text-xl'>Soy una desarrolladora Web Full Stack, con especial interés en la resolución de problemas de interfaz y la mejora de la experiencia del usuario. Estoy comprometida a encontrar soluciones innovadoras y experimentar continuamente para ayudar a los usuarios a alcanzar sus objetivos.</p>
      </div>
      <div className='md:grid md:grid-cols-2 text-start py-5 gap-4 '>
        <div className='flex flex-wrap '>
          <img src="./public/puno.jpg" alt="" className='border border-app-grayLight shadow-lg' />
        </div>
        <div>
          <h1 className='text-2xl py-3 font-semibold'>Desarrollador full stack</h1>
          <p className='pb-2 text-xl'>Me llamo Yessenia Medina, soy de <a className="text-sky-400  ..." href="https://es.wikipedia.org/wiki/Departamento_de_Puno" target="_blank">Puno</a> , Perú. Inicie en el mundo de la programación en el 2022. Enfocado siempre en el constante aprendizaje y emprendimiento. Soy una persona autodidacta.</p>
          <div className='grid  grid-cols-2 text-xl'>
            <div> 
              <p className='py-2'><span className='font-semibold'>Cumpleaños:</span> 1 Enero 1996</p>
              <p className='py-2'><span className='font-semibold'>Teléfono: </span> +51 947773543</p>
              <p className='py-2'><span className='font-semibold'>Pais:</span> Perú</p>
            </div>
            <div>
              <p className='py-2'><span className='font-semibold'>Edad</span> 27</p>
              <p className='py-2'><span className='font-semibold'>Email:</span> ymedinatt@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/*-----Habilidades--- */}
      <div>
        <div>
          <h1 className='text-5xl py-3 font-semibold'>Habilidades</h1>
        </div>
        <div className='flex gap-3 place-content-center flex-wrap'>
          <img src="/public/javascript.png" alt="" className='border-2 rounded-full'  />
          <img src="/public/css.png" alt="" className='border-2 rounded-full' />
          <img src="/public/react.png" alt="" className='border-2 rounded-full' />
          <img src="/public/vit.png" alt="" className='border-2 rounded-full' />
          <img src="/public/vc.png" alt="" className='border-2 rounded-full' />
          <img src="/public/node.png" alt="" className='border-2 rounded-full' />
          <img src="/public/git.png" alt="" className='border-2 rounded-full' />
          <img src="/public/figma.png" alt="" className='border-2 rounded-full' />
          <img src="/public/next.png" alt="" className='border-2 rounded-full' />
          <img src="/public/postg.png" alt="" className='border-2 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default About
