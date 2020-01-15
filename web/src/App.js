import React, { useState, useEffect } from 'react';
import "./global.css"
import "./App.css"
import "./Sidebar.css"
import "./Main.css"
import "./services/api"
import api from './services/api';
import "./components/DevItem"
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//componente: um bloco isolado de html css e js que não internferece no restante da APP
//estado: informações que um componente pai passa para um componente filho
//propriedade: informações mantidas pelo componente (lembrar: imutabilidade)

function App() {
  const [devs, setDevs] = useState([])
  

  useEffect(() => {
    async function loadDevs() {
      const result = await api.get("/devs")
      setDevs(result.data)
    }
    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post("/devs",data) 
    setDevs([...devs,response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
        {devs.map(dev =>(<DevItem key={dev._id}  dev={dev}/>))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
