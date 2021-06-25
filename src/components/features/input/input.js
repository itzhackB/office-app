import React from 'react'

export default function input() {
    return (
        <div>
           <label>Worker name:</label> 
           <input type="text"></input>
           <label>Worker last name:</label> 
           <input type="text"></input>
           <label>Worker age:</label> 
           <input type="text"></input>
           <label>Worker email:</label> 
           <input type="email"></input>
           <label>Worker phone:</label> 
           <input type="number"></input>
           
           <input type="button">Register</input>
        </div>
    )
}
