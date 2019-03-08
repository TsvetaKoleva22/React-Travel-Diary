import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Details(props) {
    let arr = props.adventures.filter(adv => adv._id.toString() === props.match.params.advid.toString());
    let currAdv = arr[0];
    let dateArr = currAdv.creationDate.substr(0, 10).split('-');
    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];

    let dateToShow = `${day}.${month}.${year}`;

    return (
        <div>
            <h2 className="allHeading">{currAdv.title}</h2>
            <div className="card col-6 contDet">
                <img className="imgDet" src={currAdv.imageUrl} alt={currAdv.title} />
                <div className="card-body">
                    <h5 style={{ textAlign: 'center' }}>Destination: {currAdv.destination}</h5>
                    <p className="card-text">{currAdv.description}</p>
                    <p className="card-text">Author: {currAdv.author}</p>
                    <p className="datePar">Added on: {dateToShow}</p>
                </div>
                <div className="card-footer" style={{ textAlign: 'center' }}>
                    {
                        sessionStorage.getItem('username') === currAdv.author ?
                            (<Fragment>
                                <Link type="button" to={'/edit/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ marginRight: '40px' }} >Edit</Link>
                                <Link type="button" to={'/delete/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ background: 'red' }} >Delete</Link>
                            </Fragment>)
                            : null
                    }
                    {
                        props.isAdmin ?
                        <Link type="button" to={'/delete/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ background: 'red' }} >Delete</Link>
                        : null

                    }
                </div>
            </div>
        </div>
    )
}

export default Details;
