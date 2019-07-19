import React, { Fragment } from 'react';
import SingleAdventure from '../../components/SingleAdventure'

function MyPosts(props) {
    let myPosts = props.adventures.filter(adv => adv.author === sessionStorage.getItem('username'));
    return (
        <Fragment>
            <h2 className="all-heading">My Posts</h2>
            <div className="container">
                <div className="row">
                    <div className="card-deck space-top">
                        {
                            myPosts.length ?
                                myPosts.map(adv => <SingleAdventure adv={adv} key={adv._id} />)
                                :
                                (<div>
                                    <h2>Sorry, you have no posts yet</h2>
                                    <p>Hurry up and add your newest adventure now!</p>
                                </div>)
                        }

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default MyPosts;
