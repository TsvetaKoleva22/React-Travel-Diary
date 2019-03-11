import React from 'react';

function DetailsSingleAdv(props) {
    let dateArr = props.adv.creationDate.substr(0, 10).split('-');
    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];

    let dateToShow = `${day}.${month}.${year}`;

    return (
        <div className="card-body">
            <h5 style={{ textAlign: 'center' }}>Destination: {props.adv.destination}</h5>
            <p className="card-text">{props.adv.description}</p>
            <p className="card-text">Author: {props.adv.author}</p>
            <p className="datePar">Added on: {dateToShow}</p>
        </div>
    )
}

export default DetailsSingleAdv;
