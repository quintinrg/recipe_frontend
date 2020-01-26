import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouteMatch, Link } from 'react-router-dom'


const SingleRecipe = () => {
  const [getId, setSingle] = useState()
  const match: { params: { id: string } } = useRouteMatch()
  useEffect(() => {
    axios.get(`http://localhost:5000/${match.params.id}`).then(response => {
      setSingle(response.data)
    })
  }, [match.params])

  return <div>

    <Link id="nav" to='/'>Home</Link>

    {
      !getId && (
        <p id="loading">'Loading Single Ingredient'</p>
      )
    }
    {
      getId && (
        <ul>
          {
            getId.ingredients.map((id: any) => {
              return (
                <li key={id}>{id}</li>
              )
            })
          }
        </ul>)
    }

  </div >
}


export default SingleRecipe