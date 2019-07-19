import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CreateAdventure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            imageUrl: '',
            destination: '',
            description: '',
            author: sessionStorage.getItem('username')
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let key = event.target.name;
        let currValue = event.target.value;
        this.setState({
            [key]: currValue
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createAdventure(this.state);
        // this.props.history.push('/');
    }

    render() {
        if (this.props.hasFetched) {
            return <Redirect to="/" />
        }
        return (
            <div className="form-wrapper">
                <h1 className="all-heading">Add new adventure</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Choose category</label>
                        <select id="category" name="category" value={this.state.value} onChange={this.handleChange} defaultValue='Choose the suitable category...'>
                            <option disabled>Choose the suitable category...</option>
                            
                            {
                                this.props.categories.map(cat => {
                                    return(
                                        <option value={cat._id} key={cat._id}>{cat.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image Url</label>
                        <input type="text" id="imageUrl" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="destination">Destination</label>
                        <input type="text" id="destination" name="destination" value={this.state.destination} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Adventure description</label>
                        <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange} />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
}

export default CreateAdventure;
