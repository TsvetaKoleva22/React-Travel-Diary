import React from 'react';
import { Link } from 'react-router-dom';

function SingleAdventure(props) {
    let dateArr = props.adv.creationDate.substr(0, 10).split('-');
    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];

    let dateToShow = `${day}.${month}.${year}`;

    return (
        <div className="card col-4">
            <img className="card-img-top card-image" src={props.adv.imageUrl} alt={props.adv.title} />
            <div className="card-body">
                <h4 className="card-title">{props.adv.title}</h4>
                <p className="card-text">Destination: {props.adv.destination}</p>
                <p className="card-text">Author: {props.adv.author}</p>
                <p className="datePar">Added on: {dateToShow}</p>            
            </div>
            <div className="card-footer">
                <small className="text-muted"></small>
                <Link type="button" className="btn btn-primary float-center btn-sm" to={'/adventure/details/' + props.adv._id}>Details</Link>
            </div>
        </div>
    )
}

export default SingleAdventure;
