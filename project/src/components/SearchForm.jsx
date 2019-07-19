import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedCat: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchedCat: event.target.value //the ObjectId of the caregory
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchByCat(this.state.searchedCat);
        this.props.changeSearchStatus();
    }

    render() {
        return (
            <div className="form-wrapper" style={{paddingBottom: '10px'}}>
                <form onSubmit={this.handleSubmit} id="search-form">
                    <select id="category" name="category" value={this.state.value} 
                        onChange={this.handleChange} defaultValue='Search by category...'>
                        
                        <option disabled>Search by category...</option>
                        {
                            this.props.categories.map(cat => {
                                return (
                                    <option value={cat._id} key={cat._id}>{cat.name}</option>
                                )
                            })
                        }
                        
                    </select>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;
