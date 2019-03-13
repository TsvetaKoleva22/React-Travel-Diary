import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateCategory from './CreateCategory';
import AllCategories from './AllCategories';

const CategoryMain = (props) => {
    return (
        <Switch>
            <Route path={props.match.path + '/create'} render={() => <CreateCategory {...props} />} />
            <Route path={props.match.path + '/all'} render={() => <AllCategories {...props} />} />
        </Switch>
    )
}

export default CategoryMain;