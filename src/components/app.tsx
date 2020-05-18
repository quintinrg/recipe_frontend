import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe-list';
import SingleRecipe from './single-recipe';
import About from './about'



const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={RecipeList} />
                <Route exact path='/about' component={About} />
                <Route path='/:id' component={SingleRecipe} />
            </Switch>
        </BrowserRouter>

    )
}

export default App