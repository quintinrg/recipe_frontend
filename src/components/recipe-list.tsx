import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
interface IRecipe {
  name: string
  link: string
  ingredients: string[]
  complex: 'low' | 'medium' | 'high'
  fancy: 'low' | 'medium' | 'high'
  id: string
}
const listUrl = 'http://www.mocky.io/v2/5df5524e3000002d00111c77'
const RecipeList = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>()
  useEffect(() => {
    axios.get(listUrl).then(response => {
      setRecipes(response.data)
    })
  }, [])

  return (
    <div>
      {!recipes && <h1>Loading...</h1>}
      {recipes && (
        <ul>
          {recipes.map(recipe => {
            return (
              <li key={recipe.id}>
                <Link to={`/${recipe.id}`}>{recipe.id}</Link> {recipe.name}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default RecipeList
