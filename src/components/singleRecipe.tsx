import React, { useEffect, useState } from 'react'
import axios from 'axios'



const SingleRecipe = () => {
  const [id, setSingle] = useState<any[]>()
  useEffect(() => {
    axios.get(`http://localhost:5000/${id}`).then(response => {
      setSingle(response.data)
    })
  }, [])


  return <div>
    <input type="text" id='inputId' />
    {
      !id && (
        <p>'hello'</p>
      )
    }
    {
      id && (
        <ul>
          {
            id.map(id => {
              return (
                <li key={id.id}>{id.name}, {id.id}</li>
              )
            })
          }
        </ul>
      )
    }
  </div>
}


export default SingleRecipe