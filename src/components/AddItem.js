import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
//import './addItem.css'
import ItemList from './ItemList'



class AddItem extends Component{
    
    constructor(){
        super();
        this.state = {
                item: '',
                list: []     
        }

        this.inRef = React.createRef();
        this.addBtn = this.addBtn.bind(this)
        this.setItem = this.setItem.bind(this)
        this.rmitem = this.rmitem.bind(this)
        
    }

    setItem(){
        this.setState({item: this.inRef.current.value})
    }

    //adding items to list on click
    addBtn(){
       
        const val = this.inRef.current.value
        if(val === ''){
            alert("Please enter Item ):")
        }
        else {
           
           this.setState({
               list: [...this.state.list,this.state.item]
            })
           this.inRef.current.value = ''
           //console.log(this.state.list)
        }
    }

    //Deleting items from the list of items
    rmitem(index){
        const arrayItem = [...this.state.list]
        if(index !== -1)
        arrayItem.splice(index, 1)
        this.setState({list: arrayItem})
        
    }

    

    render(){
        
   
        return(
            
            <div>
                <input type='text' placeholder='Enter Todo item' ref={this.inRef}
                onChange={this.setItem}></input>
                <button onClick={this.addBtn} >Add</button>
                
                <ItemList items={this.state.list} rm={this.rmitem}  />
                
            </div>
                

        )
    }
}



export default AddItem