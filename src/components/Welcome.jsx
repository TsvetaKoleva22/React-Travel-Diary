import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Welcome(props) {
    return (
        <div className="welcome">
            {props.username ?
                (
                    <Fragment>
                        <h1>Welcome back to the Travel Diary, {props.username} !</h1>
                        {
                            props.isAdmin ?
                                <p>
                                    <Link to="/createcategory">Add new category</Link>
                                    <Link to="/allcats">View all categories</Link>
                                </p>
                                :
                                <p>
                                    <Link to="/advcreate">Add new adventure</Link>
                                    <Link to="/myposts">View your posts</Link>
                                </p>
                        }
                    </Fragment>
                )
                : (
                    <Fragment>
                        <h1>Welcome to our Travel Diary</h1>
                        <p>Please login or register to be able to share your exiting adventures!</p>
                        <p>
                            <Link to="/login">Go to Login</Link>
                            <Link to="/Register">Go to Register</Link>
                        </p>
                    </Fragment>
                )
            }

        </div>
    )
}

export default Welcome;




