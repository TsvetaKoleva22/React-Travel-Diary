import React, { Component, Fragment } from 'react';
import SingleAdventure from '../../components/SingleAdventure'

class FoundAdventures extends Component {
    render() {
        if (!this.props.foundAdvs.length) {
            return (
                <Fragment>
                    <h2 className="all-heading">Search results:</h2>
                    <h4 style={{textAlign:'center'}}>Sorry, no adventures in this category yet....</h4>
                    <h4 style={{textAlign:'center'}}>Be the first to add one!</h4>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <h2 className="all-heading">Search results:</h2>
                <div className="container">
                    <div className="row">
                        <div className="card-deck space-top">
                            {
                                this.props.foundAdvs.map(adv => <SingleAdventure adv={adv} key={adv._id} />)
                            }

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FoundAdventures;
