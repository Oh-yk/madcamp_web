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
        picture : "https://www.youtube.com/embed/qtXFu8G0t-U?start=52"
    },
    {
        //https://www.mjmedi.com/news/articleView.html?idxno=36598
        index : 2,
        name : "숙소에서 하는 무릎통증 예방 스트레칭",
        picture : "https://www.youtube.com/embed/VVn5IUM8sms?start=41"
    }
]

function Exercise(){
    return (
        <div className = "item-box">
            { exercise.map((arr, index) => 
            < Exer 
            key = {index}
            name = {arr.name} 
            picture = {arr.picture}/>
            )}
        </div>
    )
}

function Exer({name, picture}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <h1>{name}</h1>
            </div>
            <div className="video_wrap">
                <iframe 
                title = {name}
                width="560" height="315" 
                src={picture} frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}


export default Exercise