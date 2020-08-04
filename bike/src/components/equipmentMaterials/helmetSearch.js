import React from 'react';

const HelmetSearch = (props) => {
    return (
        <div className="helmet-search">
            <form onSubmit={props.searchHelmet} action="">
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">search</button>
            </form>
        </div>
    )
}

export default HelmetSearch;