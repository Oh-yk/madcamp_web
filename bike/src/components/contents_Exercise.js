import React from 'react';
import './contents.css';

const exercise = [
    {
        index : 0,
        name : "고관절 스트레칭",
        picture : "https://www.youtube.com/embed/J7ddx9fhGhM"
    },
    {
        index : 1,
        name : "자전거 준비운동",
        picture : "https://www.youtube.com/embed/qtXFu8G0t-U"
    }
]

function Exercise(){
    return (
        <div>
            { exercise.map((arr, index) => 
            < Exer 
            key = {index}
            name = {arr.name} 
            picture = {arr.picture}/>
            )}
        </div>
    )
}

function Exer({name, picture, aid, symtom}){
    return(
        <div className="Movie">
            <div className="video_wrap">
                <iframe 
                title = {name}
                width="560" height="315" 
                src={picture} frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
            <div className="Movie__Column">
                <h2>{name}</h2>
            </div>
        </div>
    );
}


export default Exercise