import React from 'react';
import './contents.css';

const symtoms = [
    {
        index : 0,
        name : "찰과상",
        picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyKgdLF6UXRZBrIKNxOXWrYXpycsRksbpgXA&usqp=CAU",
        aid : "흐르는 물에 상처를 씻은 후 깨끗한 천으로 지혈한다. 통증이 심하거나 출혈이 멈추지 않는 경우 병원을 방문한다.",
        symtom : "마찰로 인해 피부 표면이 손상된 경우 발생한다."
    },
    {
        index : 1,
        name : "열사병",
        picture : "https://mblogthumb-phinf.pstatic.net/MjAxNzA4MTdfMTg2/MDAxNTAyOTYwNjk3OTA4.6Jna2Ro6bNNxJy7dmQ2haK4KwpIyo0Z-tmP9wwIjVxIg.eAyyRu0JdWvayVQKbntiarcfVJpdyzzwZaYeB63w43sg.PNG.cuf1105/3.png?type=w800",
        aid : "즉시 119에 전화한 후, 물에 적신 수건 등으로 체온을 내린다.",
        symtom : "체온이 급격히 상승하며, 피부는 뜨겁고 건조해진다. 두통과 어지럼증을 느끼다가 실신한다."
    },
    {
        index : 2,
        name : "일사병",
        picture : "https://mblogthumb-phinf.pstatic.net/MjAxNzA4MTdfMjQ0/MDAxNTAyOTYwNjkzMjgy.ZBSFDqzslMb4d5fyt4LbD0yUMt6pUIMD9Tv3UUrCAPMg.5lGppD4Hw93xFQAMppMb-LrIEngxi2Tv7bW9-v85x7Ig.PNG.cuf1105/2.png?type=w800",
        aid : "그늘지고 시원한 곳에서 충분히 휴식을 취한다. 차가운 이온음료나 연한 소금물로 전해질을 보충한다. 물을 뿌려주거나 부채질을 해주면 좋다. 30분안에 증상이 호전되지 않으면 병원에 가는 것이 좋다.",
        symtom : "땀이 많이 나며 어지럼증, 두통, 근육통 등을 동반한다. 심한 경우 실신할 수도 있다."
    },
    {
        index : 3,
        name : "BONK",
        picture : "https://post-phinf.pstatic.net/MjAxNzA0MjBfMTky/MDAxNDkyNjc0MzQ1MjI3.D30o3dTm3knTb5BUvJAFDplFjzYrhaNYeA5sFJNJQDIg.AGBBTztH-igwNwMH28U4JwM0LTxliSifKcUMu7_C19gg.JPEG/%EC%A0%80%ED%98%88%EB%8B%B9_2.jpg?type=w800_q75",
        aid : "열량이 높고 소화가 빠른 식품을 섭취한다. 바나나, 에너지바, 양갱 등이 좋다.",
        symtom : "일종의 저혈당 증세로, 심각한 피로를 느끼고 몸을 움직일 수 없게된다."
    }
]

function FirstAid(){
    return (
        <div className = "item-box">
            {symtoms.map(arr => 
                < Symtom 
                key = {arr.index}
                name = {arr.name} 
                picture = {arr.picture} 
                aid = {arr.aid}
                exp = {arr.symtom}/>
            )}
        </div>
    )
}

function Symtom({name, picture, aid, exp}){
    return(
        <div className = "Movie">
            <div className="Movie__Column">
                <div>
                    <img className = "Movie__Poster" 
                    src = {picture} alt={name} 
                    height = "120px"/>
                </div>
            </div>
            <div className="Movie__Column">
                <h1>{name}</h1>
                <h2>{exp}</h2>
                <h1>응급 처치</h1>
                <h2>{aid}</h2>

            </div>
        </div>
    );
}


export default FirstAid