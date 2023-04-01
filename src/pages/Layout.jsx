import React, { useState } from 'react'
import {Link, Outlet} from "react-router-dom"

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <nav className="flex items-center justify-between flex-wrap p-6 bg-button font-cantora sticky top-0">
        <div className='flex items-center flex-shrink-0 text-white mr-6 lg:mr-72'>
            {/*-------REDES SOCIALES------- */}
            <div className='flex flex-wrap gap-2'>
                    <a href="https://pe.linkedin.com/in/yessenia-medina-ticona-82915a259" target="_blank" ><img src="/public/Linkedin.png" className=" contrast-200 " alt="tailus logo" width="48" height="48" /></a>
                    <a href="https://github.com/Yess244545" target="_blank" ><img src="/public/GitHub.png" className=" contrast-200  " alt="tailus logo" width="48" height="48" /></a>
                    <a href="https://www.instagram.com/yessy_yex1/" target="_blank"><img src="/public/Instagram.png" className=" contrast-200  " alt="tailus logo" width="48" height="48" /></a>
            </div>
        </div>
        {/*----------LINKS------- */}
            <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                    <svg
                        className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        <i className='bx bx-list-ul'></i>
                    </svg>
                    <svg
                        className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                    </button>
        </div>

        {/*----------LINKS------- */}
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
            <ul className='text-2xl  lg:flex-grow  text-right max-lg:text-center '>
            
                <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 "><Link to="/" onClick={() => setIsOpen(!isOpen)} >Home</Link></li>
                <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"><Link to="/about" onClick={() => setIsOpen(!isOpen)}>Sobre mí</Link></li>
                <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"><Link to="/portfolio" onClick={() => setIsOpen(!isOpen)}>Proyectos</Link></li>
                <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"><Link to="/contact" onClick={() => setIsOpen(!isOpen)}>Contacto</Link></li>
            
            </ul>
        </div>
        
    </nav>
    <Outlet/>
    </div>

  )
}

export default Layout