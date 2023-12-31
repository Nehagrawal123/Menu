import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCategories = ['all', ...new Set(items.map((item)=>item.category))];
  const[menuItems, setMenuItems] = useState(items);
  const[category, setCategory] = useState([allCategories]); 
  console.log(allCategories);
  const filterItems = (category)=>{
    if(category==="all")
    {
      setMenuItems(items);
    }
    else
    {
      const newItem = items.filter((item)=>item.category===category)
      setMenuItems(newItem);
    }
    
  }
  return(
    <main>
      <section className='menu-section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={allCategories} filterItems={filterItems}></Categories>
      <Menu items={menuItems}></Menu>
      </section>
    </main>
  )
}
  

export default App;