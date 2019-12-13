import React, { useEffect, useState } from 'react'
import axios from 'axios'



const App = () => {
  const [recipes, setRecipes] = useState<any[]>()
  useEffect(() => {
    axios.get('http://localhost:5000').then(response => {
      setRecipes(response.data)
    })
  }, [])

  return <div>
    {
      !recipes && (
        <h1>Loading...</h1>
      )
    }
    {
      recipes && (
        <ul>
          {
            recipes.map(recipe => {
              return (
                <li key={recipe.id}>{recipe.name}, {recipe.id}</li>
              )
            })
          }
        </ul>
      )
    }
  </div>
}

export default App

// Use axios to delete data