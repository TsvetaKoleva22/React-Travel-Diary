import React, { Component } from 'react';

class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            adventures: []
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
        this.props.createCategory(this.state);
        this.props.history.push('/allcats');
    }

    render() {

        return (
            <div className="form-wrapper">
                <h1 className="allHeading">Add new Category</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name of the category</label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateCategory;
