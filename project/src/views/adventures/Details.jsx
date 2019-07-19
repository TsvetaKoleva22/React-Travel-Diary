import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DetailsSingleAdv from '../../components/DetailsSingleAdv';

function Details(props) {
    let arr = props.adventures.filter(adv => adv._id.toString() === props.match.params.advid.toString());
    let currAdv = arr[0];

    function likeBut (){
        let newLikes = Number(currAdv.likes) + 1;
        let obj = {
            likes: newLikes
        }
        props.likeAdventure(obj, currAdv._id);
    }

    return (
        <div>
            <h2 className="all-heading">{currAdv.title}</h2>
            <div className="card col-6 cont-details">
                <img className="img-details" src={currAdv.imageUrl} alt={currAdv.title} />

                <DetailsSingleAdv adv={currAdv}/>

                <div className="card-footer" style={{ textAlign: 'center' }}>
                    {
                        sessionStorage.getItem('username') === currAdv.author ?
                            (<Fragment>
                                <Link type="button" to={'/adventure/edit/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ marginRight: '40px' }} >Edit</Link>
                                <Link type="button" to={'/adventure/delete/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ background: 'red' }} >Delete</Link>
                            </Fragment>)
                            : null
                    }
                    {
                        props.username && props.username !== currAdv.author ?
                        <button onClick={likeBut} className="btn btn-primary float-center btn-sm" id="like-button" >&#10084; Like</button>
                        : null
                    }
                    {
                        props.isAdmin ?
                        <Link type="button" to={'/adventure/delete/' + currAdv._id} className="btn btn-primary float-center btn-sm" style={{ background: 'red' }} >Delete</Link>
                        : null

                    }
                </div>
            </div>
        </div>
    )
}

export default Details;
