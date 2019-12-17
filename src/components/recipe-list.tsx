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
const listUrl = 'http://127.0.0.1:5000/d1d3269a-4f87-4dfd-839b-3e373fc817f2'
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

