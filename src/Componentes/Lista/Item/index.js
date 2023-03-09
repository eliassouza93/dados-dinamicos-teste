
import './Item.css'

const Item = ({ tarefa, hora }) => {
    return (
        <div className='caixa'>
            <h5>Tarefa: {tarefa} </h5>
            <h5>Hora: {hora} </h5>
        </div>
    )
}

export default Item