import React, {Component, useState, useMemo, useEffect} from 'react';
import '../../App.css';
import axios from 'axios'
import {useTable} from 'react-table'
// import Grid from '@material-ui/core/Paper'
// import Paper from '@material-ui/core/Paper'



export default function Leaderboards(){

    const [trial, setTrial] = useState([])
    const check = []

    
    useEffect(()=> {
        axios.get('/leaderboards').then(
            (res) => {
                console.log(res)
                setTrial(res.data)
            }
        )
    }, [])

    return (
    
    <div className='Leaderboards'> 
        {trial.map(note => (
            <p key={note.leaderBoardId}>{note.score} {note.userName} </p>
        ))}
        
    </div>
    )
}