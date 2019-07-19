import React, { Component, Fragment } from 'react';
import SingleCategory from '../../components/SingleCategory'

class AllCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    render() {
        if (!this.props.categories.length && !this.state.isLoading) {
            return <h1>There are no categories yet</h1>
        }
        if (this.state.isLoading) {
            return <h1>Loading....</h1>
        }

        return (
            <Fragment>
                <h2 className="all-heading">All categories</h2>
                <div className="container">
                    <div className="row">
                        <div className="card-deck space-top">
                            {
                                this.props.categories.map(cat => <SingleCategory cat={cat} key={cat._id} />)
                            }

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AllCategories;
