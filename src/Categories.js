import React from 'react'

export default function Categories({categories, filterItems}) {
  return (
    <div className='btn-container'>
        {categories.map((category,index)=>
            <button className='filter-btn' key={index} onClick={()=>filterItems(category)}>
                {category}
                </button>
        )}
        {/* <button className='filter-btn' onClick={()=>filterItems((categories)=>)}>All</button>
        <button className='filter-btn' onClick={()=>filterItems("breakfast")}>Breakfast</button>
        <button className='filter-btn' onClick={()=>filterItems("lunch")}>Lunch</button>
        <button className='filter-btn' onClick={()=>filterItems("shakes")}>Shakes</button> */}
    </div>
  )
}
   