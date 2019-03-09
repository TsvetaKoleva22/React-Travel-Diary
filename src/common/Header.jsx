import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.jpg'

function Header(props) {
    return (
        <header>
            <nav className="navbar-menu">
                <Link id="navimage" to="/about"><img id="compass" src={logo} alt="logo" /></Link>
                <Link to="/" className="active" aria-current="page">Home</Link>
                <Link to="/alladvs">All Adventures</Link>
                {
                    props.username ?
                        (<Fragment>
                            {
                                props.isAdmin ?
                                    (<Fragment>
                                        <Link to="/createcategory">Create Category</Link>
                                        <Link to="/allcats">All Categories</Link>
                                    </Fragment>)
                                    
                                    : (<Fragment>
                                        <Link to="/advcreate">Add Adventure</Link>
                                        <Link to="/myposts">My Posts</Link>
                                    </Fragment>)
                            }
                            <Link to="/logout">Logout</Link>
                        </Fragment>)
                        :
                        (<Fragment>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </Fragment>)
                }

            </nav>
        </header>
    )

}

// className Header extends Component {
//     render() {
//         return (

//             <header><Link to="/" className="logo">Interactive IMDB</Link>
//                 <div className="header-right">
//                     <Link to="/">Home</Link>
//                     {
//                         this.props.username ?
//                             (<span>
//                                 <Link to="/">Welcome {this.props.username}!</Link>
//                                 {
//                                     this.props.isAdmin ?
//                                         (<span><Link to="/create">Create</Link></span>)
//                                         : null
//                                 }
//                                 <a href='#' onClick={this.props.logout}>Logout</a>
//                             </span>)
//                             :
//                             (<span>
//                                 <Link to="/register">Register</Link>
//                                 <Link to="/login">Login</Link>
//                             </span>)
//                     }
//                 </div>
//             </header>
//         )
//     }
// }

export default Header;
