import React, { Component, Fragment } from 'react';
import SingleAdventure from './SingleAdventure'

class MostRecentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    render() {
        if (!this.props.adventures.length && !this.state.isLoading) {
            return (
                <Fragment>
                    <h1>Sorry, no adventures yet....</h1>
                    {
                        this.props.isAdmin ?
                        null
                        :<h1>Be the first to add one!</h1>
                    }
                </Fragment>
            )
        }
        if (this.state.isLoading) {
            return <h1>Loading....</h1>
        }

        let advToShow = this.props.adventures.slice(0);
        if (advToShow.length > 3) {
            let maxLength = advToShow.length - 3;
            advToShow = advToShow.slice(maxLength);
        }

        return (
            <Fragment>
                <h2>Most recent adventures</h2>
                <div className="row">
                    <div className="card-deck space-top">
                        {
                            advToShow.map(adv => <SingleAdventure adv={adv} key={adv._id} />)
                        }

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MostRecentSection;
