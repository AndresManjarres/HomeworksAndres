export const TodoItem = ({ todo }) => {
    return (
        <li className=''>
            <span className='align-self-center'>{todo.description}</span>
            <button className='botones'>Borrar</button>
        </li>
    )
}
