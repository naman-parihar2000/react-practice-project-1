import './App.css' 
import { useState } from 'react';
import React from 'react'
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'dog', 'cow', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {

    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal ()])
    }

    const renderedAnimal = animals.map((animal, index)=>{
        return <AnimalShow type={animal} key={index}></AnimalShow>
    })

    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimal}</div>
        </div>
    )
}

export default App