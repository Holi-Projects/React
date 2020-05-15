import React,{Component} from 'react';
import './App.css';
import AddItem from './components/item'

class App extends Component {

  render(){
    return (
      <div className='App'>
        <h1>ToDo List</h1>
        
        
        <AddItem />
        
      </div>
    
    )
  }
}
export default App;
