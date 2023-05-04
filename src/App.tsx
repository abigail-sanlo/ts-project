import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

interface Sub{
  nick:string,
  subMonths: number,
  avatar: string,
  description?: string
}

interface AppState{
  subs:Array<Sub>,
  newSubsNumber:number
}

const INITIAL_STATE=[{
  nick:'John',
  subMonths: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu',
  description: 'Hace de moderador a veces'
},
{
  nick:'Sergio',
  subMonths: 5,
  avatar: 'https://i.pravatar.cc/150?u=sergio',
}]
function App() {
  const [subs,setSubs]=useState<Array<Sub>>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() =>{
    setSubs(INITIAL_STATE)
  },[])
  return (
    <div className="App">
      <h1>Users</h1>
      <List subs={subs}/>
    </div>
  );
}

export default App;
