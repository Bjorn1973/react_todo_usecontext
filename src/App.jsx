import Form from "./components/Form"
import Todolist from './components/Todolist'
import './App.css'
import {Provider} from './data';

function App() {
  

  return (
    <Provider>
    <div className="App">
      <Form />
      <Todolist />
    </div>
     </Provider>
  )
}

export default App
