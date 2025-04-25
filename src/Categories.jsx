import React from 'react'

const Categories = ({categories,showCategory}) => {

  return (
    <div className='btn-container'>
        {categories.map((category)=>{
            return <button type='button' className='btn' key={category} onClick={()=>showCategory(category)}>
                {category}
            </button>
        })}
    </div>
  )
}

export default Categories