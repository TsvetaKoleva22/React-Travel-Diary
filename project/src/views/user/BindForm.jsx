import React, { Component } from 'react';

class BindForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        // console.log(event.target.name + '=>' + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() { //za da imat default value pri startitrane na komponenta
        this.props.children.forEach(child => {
            if (child.type === 'input') {
                this.setState({
                    [child.props.name]: ''
                });
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.props.onSubmit(event, this.state)} className='user-form'>
                    {
                        React.Children.map(this.props.children, child => {
                            if (child.type === 'input') {
                                return React.cloneElement(child, { onChange: this.handleChange, ...child.props })
                            }
                            return child;
                        })
                    }
                    <br></br>
                    <button type="submit">{this.props.butName}</button>
                </form>
            </div>
        )
    }
}

export default BindForm;