import React, { Component, Fragment } from 'react';
import SingleAdventure from '../../components/SingleAdventure'

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    render() {
        if (!this.props.adventures.length && !this.state.isLoading) {
            return <h1>Sorry, no adventures yet....Be the first to add one!</h1>
        }
        if (this.state.isLoading) {
            return <h1>Loading....</h1>
        }

        let myPosts = this.props.adventures.filter(adv => adv.author === sessionStorage.getItem('username'));


        return (
            <Fragment>
                <h2 className="allHeading">My Posts</h2>
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
}

export default MyPosts;
