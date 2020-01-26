import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const RecipeList = () => {
  const [recipes, setRecipes] = useState<any[]>()
  useEffect(() => {
    axios.get('http://localhost:5000').then(response => {
      setRecipes(response.data)
    })
  }, [])

  return <div>

    <h2>
      <p>This is "Home"!</p>
    </h2>

    {
      !recipes && (
        <h1 id="loading">Loading...</h1>
      )
    }
    {
      recipes && (

        <ul>
          {
            recipes.map(recipe => {
              return (
                <li key={recipe.id}>
                  <Link to={`/${recipe.id}`}>{recipe.name}, {recipe.id}</Link>
                </li>
              )
            })
          }
        </ul>
      )
    }
  </div>
}

export default RecipeList
// Use axios to delete data