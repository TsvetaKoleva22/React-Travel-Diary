import React from 'react';

function SingleCategory(props) {
    return (
        <div className="card col-12">
            <div className="card-body">
                <h4 className="card-title">Name:</h4>
                <p className="card-text">{props.cat.name}</p>          
            </div>
        </div>
    )
}

export default SingleCategory;
