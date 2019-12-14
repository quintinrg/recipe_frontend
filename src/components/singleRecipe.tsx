import React, { useEffect, useState } from 'react'
import axios from 'axios'



const SingleRecipe = () => {
  const [getId, setSingle] = useState<any[]>()
  useEffect(() => {
    axios.get('http://localhost:5000/b7f20ff1-2777-402a-9201-d2aad0d6a7a1').then(response => {
      setSingle(response.data)
    })
  }, [])

  return <div>

    {
      !getId && (
        <p>'hello'</p>
      )
    }
    {
      getId && (
        <ul>
          {
            getId.map(id => {
              return (
                <li key={id.name}>{id.name}</li>
              )
            })
          }
        </ul>)
    }

  </div >
}


export default SingleRecipe