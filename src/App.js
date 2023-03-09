
import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Lista from "./Componentes/Lista";


function App() {

  const [tarefas, setTarefas] = useState([])
  return (
    <div >
      <Banner />
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />



    </div>
  );
}

export default App;
