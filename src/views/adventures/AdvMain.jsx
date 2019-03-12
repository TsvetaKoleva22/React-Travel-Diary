import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateAdventure from './CreateAdventure';
import AllAdventures from './AllAdventures';
import MyPosts from './MyPosts';
import Details from './Details';
import EditAdventure from './EditAdventure';
import DeleteAdventure from './DeleteAdventure';
import FoundAdventures from './FoundAdvs';
import Home from '../Home';

const AdvMain = (props) => {
    return (
        <Switch>
            <Route path={props.match.path + '/all'} render={() =>
                <AllAdventures
                    adventures={props.adventures}
                    categories={props.categories}
                    searchByCat={props.searchByCat}
                />} />

            <Route path={props.match.path + '/found'} exact render={() => 
                <FoundAdventures foundAdvs={props.foundAdvs} />} />
            
            <Route path={props.match.path + '/details/:advid'} render={(routeProps) =>
                <Details adventures={props.adventures} isAdmin={props.isAdmin} {...routeProps} />} />

            {
                props.username ?
                    (
                        <Switch>
                            <Route path={props.match.path + '/myposts'} render={() => <MyPosts adventures={props.adventures} />} />
                            <Route path={props.match.path + '/create'} render={(routeProps) =>
                                <CreateAdventure
                                    createAdventure={props.createAdventure}
                                    categories={props.categories}
                                    hasFetched={props.hasFetched}
                                    {...routeProps}
                                />} />

                            <Route path={props.match.path + '/edit/:advid'} render={(routeProps) =>
                                <EditAdventure
                                    editAdventure={props.editAdventure}
                                    adventures={props.adventures}
                                    hasFetched={props.hasFetched}
                                    {...routeProps}
                                />} />

                            <Route path={props.match.path + '/delete/:advid'} render={(routeProps) =>
                                <DeleteAdventure
                                    deleteAdventure={props.deleteAdventure}
                                    adventures={props.adventures}
                                    hasFetched={props.hasFetched}
                                    {...routeProps}
                                />} />
                        </Switch>
                    )
                    : (<Home username={props.username} isAdmin={props.isAdmin} adventures={props.adventures} />)
            }
        </Switch>
    )
}

export default AdvMain;