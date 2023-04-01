import React from 'react'

function Contact() {
  return (
    <div className="font-cantora py-14 px-[100px] text-center max-lg:px-5 ">
      <div className='md:grid md:grid-cols-2 bg-base rounded-[20px] py-2 px-2'>
      <div className=' text-center'>
        <h2 className='text-2xl pb-3'>Ponerse en Contacto</h2>
        <p className='px-5'>Soy muy accesible y me encantaría hablar contigo. No dude en llamar, enviarme un correo electrónico. Sígueme en las redes sociales o simplemente completa el formulario de consulta.</p>
        <img src="puno.jpg" alt="" className='border border-app-grayLight  px-5 py-3'/>
      </div>
      <div className=' text-center'>
        <h2 className='text-2xl pb-3'>Enviame un mensaje</h2>
        <div className=''>
          <form action="https://formsubmit.co/ymedinatt@gmail.com" method="POST" className='flex flex-col p-2 gap-y-4'>
            <input type="text" name='name' placeholder='Nombre' className='hadow-sm bg-gray-50 border border-gray-300 text-font-base text-sm rounded-lg  block w-full p-2.5 '/>
            <input type="email" name='email' placeholder='Email' className='hadow-sm bg-gray-50 border border-gray-300 text-font-base text-sm rounded-lg block w-full p-2.5'/>
            <input type="text" name='tema' placeholder='Tema' className='hadow-sm bg-gray-50 border border-gray-300 text-font-base text-sm rounded-lg  block w-full p-2.5'/>
            <textarea name="message" id="" cols="30" rows="6" placeholder='Mensaje' className='hadow-sm bg-gray-50 border border-gray-300 text-font-base text-sm rounded-lg  block w-full p-2.5'></textarea>
            <input type="submit" value="Enviar" className='py-2.5 px-5 text-xl font-medium text-font-base focus:outline-none bg-button rounded-lg border border-font-base hover:bg-font-base hover:text-red-50 focus:z-10 focus:ring-4' />

            <input type="hidden" name='_next' value="http://localhost:5173/contact"/>
            <input type="hidden" name='_captcha' value="false"/>
          </form>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact