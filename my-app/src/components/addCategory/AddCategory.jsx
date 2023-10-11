import {React,useState} from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState("...")
    const onInputChange = (evt) => {
        setinputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        onAddCategory(inputValue)
        setinputValue("")
    }

  return (
    <div>
        <form onSubmit={(event) => onSubmit(event)} >
            <input 
                type="text"
                placeholder='buscar'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
                className='input'
            />
        </form>
    </div>
  )
}
