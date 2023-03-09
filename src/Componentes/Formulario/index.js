import { useState } from "react"
import Botao from "../Botao"
import './Formulario.css'

const Formulario = ({ setTarefas }) => {

    const [tarefa, setTarefa] = useState('')
    const [hora, setHora] = useState('')

    const tudo = {
        tarefa,
        hora
    }


    function adicionarTarefa(e) {
        e.preventDefault();

        setTarefas(tarefasAntigas => [...tarefasAntigas, { ...tudo }])

        if (tarefa && hora) {
            return setTarefa(''), setHora('')
        }

    }

    return (
        <div className="formulario">
            <form onSubmit={adicionarTarefa} >
                tarefa
                <input
                    required
                    name='tarefa'
                    value={tudo.tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                />
                hora
                <input
                required
                    name='hora'
                    value={tudo.hora}
                    onChange={evento => setHora(evento.target.value)}

                />

                <Botao>Adicionar</Botao>
            </form>



        </div>
    )



}
export default Formulario
