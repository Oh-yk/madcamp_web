import React from 'react';
import './contents.css';

const symtoms = [
    {
        name : "찰과상",
        picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyKgdLF6UXRZBrIKNxOXWrYXpycsRksbpgXA&usqp=CAU",
        aid : "세척 및 지혈"
    },
    {
        name : "열사병",
        picture : "http://www.amc.seoul.kr/asan/file/imageView.do?fileId=F000000003805",
        aid : "심부온도 낮추기"
    },
    {
        name : "BONK",
        picture : "https://post-phinf.pstatic.net/MjAxNzA0MjBfMTky/MDAxNDkyNjc0MzQ1MjI3.D30o3dTm3knTb5BUvJAFDplFjzYrhaNYeA5sFJNJQDIg.AGBBTztH-igwNwMH28U4JwM0LTxliSifKcUMu7_C19gg.JPEG/%EC%A0%80%ED%98%88%EB%8B%B9_2.jpg?type=w800_q75",
        aid : "단거"
    }
]

function FirstAid(){
    {
        return (
            <div>
                {symtoms.map(arr => 
                    < Symtom name = {arr.name} 
                    picture = {arr.picture} 
                    aid = {arr.aid}/>
                )}
            </div>
        )
    }
}

function Symtom({name, picture, aid}){
    return(
        <div>
            <div className="Movie__Column">
                <div>
                    <img className = "Movie__Poster" src = {picture} alt={name} />
                </div>
            </div>
            <div className="Movie__Column">
                <h1>{name}</h1>
                <div className="Movie__Genres">
                <h2>{aid}</h2>
                </div>
            </div>
        </div>
    );
}


export default FirstAid