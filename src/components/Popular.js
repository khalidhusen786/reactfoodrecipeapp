import React, { useEffect,useState } from 'react'

function Popular() {
  const [food,foodState]=useState([])
  
    useEffect(()=>{
      // console.log("hello there")
      fetchRecipe()
      
  },[])

  const fetchRecipe=()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fe91d806ffmshfb1d32c36d65dc0p114d5fjsn530e07e1c9b1',
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=recipes', options)
 .then(response => response.json())
    .then(response =>{
      foodState(response)
    },
    )
    .catch(err => console.error(err))
    
  };
  console.log(food)

  return (
    <div></div>
  )

}



export default Popular