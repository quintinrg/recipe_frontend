import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RecipeList from './recipe-list'
import SingleRecipe from './single-recipe'
const App = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/">
        <RecipeList />
      </Route>
      <Route path="/:id">
        <SingleRecipe />
      </Route>
    </BrowserRouter>
  )
}

export default App
