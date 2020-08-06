import React from 'react';
import './contents.css';

const exercise = [
    {
        index : 0,
        name : "[주행 전후] 고관절 스트레칭",
        picture : "https://www.youtube.com/embed/J7ddx9fhGhM"
    },
    {
        index : 1,
        name : "[주행 전] 자전거 준비운동",
        picture : "https://www.youtube.com/embed/qtXFu8G0t-U?start=52"
    },
    {
        //https://www.mjmedi.com/news/articleView.html?idxno=36598
        index : 2,
        name : "[주행 후] 무릎통증 예방 스트레칭",
        picture : "https://www.youtube.com/embed/xLo46aEEbCI?start=90"
    },
    {
        index : 3,
        name : "[여행 전] 근력강화",
        picture : "https://www.youtube.com/embed/hOSHQvFme7E?start=90"
    },
    {
        index : 4,
        name : "[여행 전] 지구력 강화",
        picture : "https://www.youtube.com/embed/s14NQ6Cz4QE"
    },
    {
        index : 5,
        name : "[여행 전] 라이딩 준비물",
        picture : "https://www.youtube.com/embed/yFvy3d_cwYQ?start=157"
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
            <h1>{name}</h1>
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