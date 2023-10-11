import {React, useState} from 'react'

export const Category = () => {
    const [categories, setCategories] = useState(["VideoJuegos", "Electronica", "Computación"])
    const [category, setCategory] = useState("")

    const onSetCategory = (event) => {
        setCategory(event.target.value)
    };

    const onAddCategory = () => {
        setCategories(list => [...list, category])
        setCategory("")
    }
    
  return (
    <div>
        <h1>CategoriaExpert</h1>
            <input
                type="text"
                value={category}
                onChange={(event) => onSetCategory(event)}
                className="input"
            />
            <button onClick={() => onAddCategory()} className='botones'>Añadir categoría</button>

            <ol>
                {categories.map((category, key) => {
                    return (
                        <li key={key} className="lista"> 
                            {category}
                        </li>
                    );
                })}
            </ol>
    </div>
  )
}