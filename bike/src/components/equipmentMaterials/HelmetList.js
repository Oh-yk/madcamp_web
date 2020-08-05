import React from 'react';
import HelmetCard from './helmetCard';
import './uiEquip.css';

const HelmetList = (props) => {
    return (
        <div className="list">
            {
                props.helmets.map((helmet, i) => {
                    return <HelmetCard
                                key={i}
                                image={helmet.volumeInfo.imageLinks.thumbnail}
                                title={helmet.volumeInfo.title}
                                author={helmet.volumeInfo.authors}
                                published={helmet.volumeInfo.publishedDate} />
                })
            }

        </div>

    )
}

export default HelmetList;