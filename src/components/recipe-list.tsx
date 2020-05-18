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
    <p id='nav'>This is 'Home'!</p>
    <Link to='/about'>About</Link>

    {
      !recipes && (
        <h1 id='loading'>Loading...</h1>
      )
    }
    {
      recipes && (

        <ul>
          {
            recipes.map(recipe => {
              return (
                <li key={recipe.id}>
                  <Link to={`/${recipe.id}`}>{recipe.name}</Link> <a href="google.com">LINK</a>
                </li>
              )
            })
          }
        </ul>
      )
    }
  </div >
}

export default RecipeList
// Use axios to delete data