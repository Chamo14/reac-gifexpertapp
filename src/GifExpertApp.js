import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  //const categories= ['One Punch Man','Samurai X','Dragon ball'];
 const [categories, setCategories] = useState(['One Punch']);


//  const handleAdd = () =>{
//  //1 forma
//     //setCategories([...categories,'Hunter X' ]);
// //2 forma ( dinamica)
//     setCategories( heroes =>[...heroes,'Hunter X' ]);
//  }

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories= { setCategories } />
    <hr/>

    <ol>
        {
            // categories.map( (category) => {
            //     return <li key= { category }> { category }</li>
            // })

            categories.map( category => (
                <GifGrid
                    key= {category}
                    category= { category }
                />
            ))
        }
    </ol>

    </>
  )
}

export default GifExpertApp
