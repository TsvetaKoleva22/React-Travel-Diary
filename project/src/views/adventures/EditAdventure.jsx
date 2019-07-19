import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EditAdventure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imageUrl: '',
            destination: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let arr = this.props.adventures.filter(adv => adv._id.toString() === this.props.match.params.advid.toString());
        let currAdv = arr[0];
        this.setState({
            title: currAdv.title,
            imageUrl: currAdv.imageUrl,
            destination: currAdv.destination,
            description: currAdv.description
        })
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
        let id = this.props.match.params.advid;
        this.props.editAdventure(this.state, id);
        // this.props.history.push('/');
    }

    render() {
        if (this.props.hasFetched) {
            return <Redirect to="/" />
        }
        return (
            <div className="form-wrapper">
                <h1 className="all-heading">Edit adventure</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
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
                    <button type="submit">Edit</button>
                </form>
            </div>
        );
    }
}

export default EditAdventure;
