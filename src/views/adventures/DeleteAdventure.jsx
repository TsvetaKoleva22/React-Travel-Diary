import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class DeleteAdventure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imageUrl: '',
            destination: ''
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
            destination: currAdv.destination
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
        this.props.deleteAdventure(id);
        // this.props.history.push('/');
    }

    render() {
        if (this.props.hasFetched) {
            return <Redirect to="/" />
        }
        return (
            <div className="form-wrapper">
                <h1 style={{color: 'crimson'}}>Delete adventure</h1>
                <img src={this.state.imageUrl} alt={this.state.title} style={{marginBottom: '15px', border: '10px solid white'}}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="destination">Destination</label>
                        <input type="text" id="destination" name="destination" value={this.state.destination} onChange={this.handleChange} disabled/>
                    </div>
                    <button type="submit">Delete</button>
                </form>
            </div>
        );
    }
}

export default DeleteAdventure;
