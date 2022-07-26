import React, {Component, useState, useMemo, useEffect} from 'react';
import '../../App.css';
import axios from 'axios'
import {useTable} from 'react-table'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';



export default function Leaderboards(){

    const [trial, setTrial] = useState([])


    useEffect(()=> {
        axios.get('/leaderboards').then(
            (res) => {
                console.log(res)
                setTrial(res.data)
            }
        )
    }, [])

    var newRows = []
    var update = []
    
   
    var changeTable =() => {
        // console.log("---> all data")
        // console.log(trial.data)
        // console.log("---> data first row")
        // console.log(trial.data[0])
        // console.log("---> newRows")
        // console.log(newRows)
        for (let i =0;i < trial.data.length;i++){
            newRows.push({ id: i, userName: trial.data[0].userName, score: trial.data[0].score })
        }
        // console.log("---> new newRows")
        // console.log(newRows)
        // console.log("---> rows")
        // console.log("Will IT WORK")
        update = newRows
        console.log(trial)
        console.log(update)

    }



    


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'userName',
          headerName: 'userName',
          width: 150,
          editable: true,
        },
        
        {
          field: 'score',
          headerName: 'score',
          width: 110,
          editable: true,
        },
      ];

const rows = [
        { id: 1, userName: 'Snow', score: 12500, age: 35 },
        { id: 2, userName: 'Lannister', score: 45685, age: 42 },
        { id: 3, userName: 'Lannister', score: 48645, age: 45 },
        { id: 4, userName: 'Stark', score: 24568, age: 16 },
        { id: 5, userName: 'Targaryen', score: 453, age: null },
        { id: 6, userName: 'Melisandre', score: null, age: 150 },
        { id: 7, userName: 'Clifford', score: 13556, age: 44 },
        { id: 8, userName: 'Frances', score: 16583, age: 36 },
        { id: 9, userName: 'Roxie', score: 6346, age: 65 },
      ];

      
    return (



    <div className='Leaderboards'> 
    
        {/* <h1>gfkfg</h1> */}
        
        {/* <button onClick={changeTable}>Leaderboard</button> */}
        <Box sx={{ height: 950, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick />
        </Box>
        <p>Raw Leaderboard</p>
        {trial.map(note => (
            <p key={note.leaderBoardId}>{note.score} {note.userName} </p>
        ))}
        
    </div>
    

    
    





    )
}