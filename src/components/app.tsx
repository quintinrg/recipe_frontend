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
                <Route path='/:id' component={SingleRecipe} />
                <Route exact path='/about' component={About} />
            </Switch>
        </BrowserRouter>

    )
}

export default App