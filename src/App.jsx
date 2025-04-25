import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";


const temp = menu.map((item)=>item.category);
const tempSet = new Set(temp);
const tempItems = ['all', ...tempSet];

const App = () => {
  const [menuItems,setMenuItems]=useState(menu);
  const [categories,setCategories]=useState(tempItems)
  
  const showCategory = (category) =>{
    if (category === 'all') {
      setMenuItems(menu)
    } else {
      const filteredItems = menu.filter((item) => item.category === category)
      setMenuItems(filteredItems)
    }
  }

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} showCategory={showCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
};
export default App;
