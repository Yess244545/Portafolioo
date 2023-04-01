import React, { useState } from 'react'
import Dos from './Dos';

const Uno = () => {
    const [proyect, setProyect] = useState(
        [
        {
        title: 'Rick and Morty',
        image: '/public/rick.png',
        url: 'https://rick-and-morty-3e6f5a.netlify.app',
        git: 'https://github.com/Yess244545/Rick-and-morty-app.git',
        },
        {
        title: 'Pokedex',
        image: '/public/poke.png',
        url: 'https://pokedex-pithivier-bba578.netlify.app/',
        git: 'https://github.com/Yess244545/Pokedexs.git',
        },
        {
        title: 'Weather App',
        image: '/public/weather.png',
        url: 'https://wheather-app-yes938dcd.netlify.app/',
        git: 'https://github.com/Yess244545/WheatherApp.git',
        },
        {
            title: 'Rick and Morty',
            image: '/public/rick.png',
            },
            {
            title: 'Pokedex',
            image: '/public/poke.png',
            },
            {
            title: 'Pokedex',
            image: '/public/poke.png',
            },
            {
                title: 'Pokedex',
                image: '/public/poke.png',
                },
    ]
    )
    return (
        <div className='row'>
        {proyect.map((proyectitos)=>{ 
            return (
            <Dos key={proyectitos.url} title={proyectitos.title} image={proyectitos.image} url={proyectitos.url}  git={proyectitos.git} />
        );
        })}
    
    
        </div>
    );
    };

export default Uno