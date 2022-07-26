import React from 'react'
import '../../App.css'
import {Component, useState, useMemo, useEffect} from 'react';
import axios from 'axios'

export default function Profile(){
    

    const [trial, setTrial] = useState([])
    const check = []

    
    useEffect(()=> {
        axios.get('/currentuser').then(
            (res) => {
                console.log(res)
                setTrial(res.data)
            }
        )
    }, [])

    return (
    
    <div className='Profile'> 
        {trial.map(note => (
            <>
                <h1>{note.user_name}</h1>
                <p>Level {note.level}</p>
                
            </>
        ))}
        
    </div>
    )
}