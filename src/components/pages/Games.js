import React from 'react'
import '../../App.css'
import {useState, useEffect} from 'react';
import axios from 'axios'


var counter = 0;
let human =""
export default function Games(){

    
    var [count, setCount] = useState("")
    var [valueWin, setWin] = useState("")
    var [valueLose, setLose] = useState("")
    
    
    
    const getWin =() => {
        
        setWin("You Win! YOUR SCORE: " + (100-counter))
        setLose("")
        let score = 100 - counter;
        counter = 0;
        var temp = ""
        human = temp

        axios.get('/currentuser').then(
            (res) => {
                temp = res.data[0].user_name
                human = temp
                console.log(human + ": " +temp)
                axios.post('/leaderboards', {
                    "userName": human,
                    "score": score
                })
            }
        )
        axios.get('players').then((response) => console.log(response.data))
        console.log(score)
        
        
    }
    const getLose =() => {
    
        setLose("Attempted: "+counter + " times")
        setWin("")
        counter = counter + 1;
    }

    return (

        < >
            <h1 className='Games'>
                <p></p>
                <p >{valueWin}</p> <p >{valueLose}</p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <p></p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <p></p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getWin}>Lose</button>
                <p></p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <p></p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <p></p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <p></p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <p></p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <p></p>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <button onClick={getLose}>Lose</button>
                <p></p>
                
                
                

                

            </h1>
        </>
        
    )
}

// background-image: url('../public/images/img-2.jpg');