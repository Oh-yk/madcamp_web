import React from 'react';
import './contents.css';

const exercise = [
    {
        index : 0,
        name : "찰과상",
        picture : "https://www.youtube.com/watch?v=J7ddx9fhGhM",
        aid : "운동종류",
        symtom : "효과"
    },
    {
        index : 1,
        name : "찰과상",
        picture : "https://www.youtube.com/watch?v=qtXFu8G0t-U",
        aid : "운동종류",
        symtom : "효과"
    }
]

function Exercise(){
    return (
        <div>
            { exercise.map((arr, index) => 
            < Exer 
            key = {index}
            name = {arr.name} 
            picture = {arr.picture} 
            aid = {arr.aid}
            symtom = {arr.symtom}/>
            )}
        </div>
    )
}

function Exer({name, picture, aid, symtom}){
    return(
        <div className = "Movie">
            <div className="Movie__Column">
                <iframe url = {picture} title = {name}></iframe>
            </div>
            <div className="Movie__Column">
                <h1>{name}</h1>
                <h2>{symtom}</h2>
                <h1>처치법</h1>
                <h2>{aid}</h2>
            </div>
        </div>
    );
}


export default Exercise