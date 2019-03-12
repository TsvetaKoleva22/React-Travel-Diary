import React, { Component, Fragment } from 'react';
import SingleAdventure from '../../components/SingleAdventure'

class AllAdventures extends Component {
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

        return (
            <Fragment>
                <h2 className="allHeading">All adventures</h2>
                <div className="container">
                    <div className="row">
                        <div className="card-deck space-top">
                            {
                                this.props.adventures.map(adv => <SingleAdventure adv={adv} key={adv._id} />)
                            }

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AllAdventures;
