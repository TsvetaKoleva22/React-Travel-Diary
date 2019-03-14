import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import SingleAdventure from '../../components/SingleAdventure'
import SearchForm from '../../components/SearchForm';

class AllAdventures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchDone: false
        }
        this.changeSearchStatus = this.changeSearchStatus.bind(this);
    }

    changeSearchStatus() {
        this.setState({
            searchDone: true
        })
    }

    render() {
        if (!this.props.adventures.length) {
            return <h1>Sorry, no adventures yet....
                {
                    this.props.isAdmin ?
                        null :
                        <span>Be the first to add one!</span>
                }
            </h1>
        }

        if (this.state.searchDone) {
            return <Redirect to="/adventure/found" />
        }

        return (
            <Fragment>
                <h2 className="allHeading">All adventures</h2>
                <SearchForm categories={this.props.categories} searchByCat={this.props.searchByCat} changeSearchStatus={this.changeSearchStatus} />
                <div style={{margin: '0px 40px'}}>
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
