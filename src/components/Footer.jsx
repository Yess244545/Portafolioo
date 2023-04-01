import React from 'react'

function Footer() {
  return (
        <footer className='bg-font-base text-orange-50 px-[70px] py-[30px] font-cantora absolute w-full '>
        <div className='grid justify-items-auto grid-cols-2 pb-3' >
            <div className=' '>
                <h3 className='pb-2 text-xl font-medium'>Yessenia Medina</h3>
                <p className='text-base'>
                Soy desarrollador web, apasionado por la tecnología y la programación.
                </p>
            </div>

            <div className='pl-4 '>
                <h3 className='text-xl font-medium'>Redes Sociales</h3>

                <ul className='flex flex-row  gap-4  pt-2'>
                <li className=''>
                    <a href="https://www.facebook.com/yezsenhia.med" target="_blank"><i className="bx bxl-facebook"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/yessy_yex1/" target="_blank"><i className='bx bxl-instagram'></i></a>
                </li>
                <li>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                </li>
                <li>
                    <a href="https://pe.linkedin.com/in/yessenia-medina-ticona-82915a259" target="_blank"><i className='bx bxl-linkedin'></i></a>
                </li>
                </ul>
            </div>
        </div>

        <p className='text-center pt-3 border-t-2 border-gray-600 '>
        &copy; 2023, Todos los derechos reservados
        </p>
    </footer>
    )
}

export default Footer