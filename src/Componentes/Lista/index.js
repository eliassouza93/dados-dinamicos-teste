import Item from "./Item"


const Lista = ({tarefas}) => {
    return (
        <div>
            {tarefas.map((item, index) => {
                return (
                    <>
                        <Item
                            {...item}
                        />
                    </>
                )
            })}

        </div>
    )
}
export default Lista