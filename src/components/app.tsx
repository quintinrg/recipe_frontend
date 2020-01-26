import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe-list';
import SingleRecipe from './single-recipe';



const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={RecipeList} />
                <Route path='/:id' component={SingleRecipe} />
            </Switch>
        </BrowserRouter>

    )
}

export default App