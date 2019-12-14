import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
interface IRecipe {
  name: string
  link: string
  ingredients: string[]
  complex: 'low' | 'medium' | 'high'
  fancy: 'low' | 'medium' | 'high'
  id: string
}
const listUrl = 'http://www.mocky.io/v2/5df5524e3000002d00111c77'
const SingleRecipe = () => {
  const match: { params: { id: string } } = useRouteMatch()
  const [recipe, setRecipe] = useState<IRecipe>()
  useEffect(() => {
    axios.get(listUrl).then(response => {
      const allRecipes: IRecipe[] = response.data
      setRecipe(allRecipes.find(singleRecipe => singleRecipe.id === match.params.id))
    })
  }, [match.params.id])
  return (
    <div>
      <Link to="/">Home</Link>
      <a style={{ marginLeft: '12px' }} href="/something-else.html">
        Something Else
      </a>
      {!recipe && <h1>Loading...</h1>}
      {recipe && (
        <div>
          <h1>{recipe.name}</h1>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SingleRecipe
