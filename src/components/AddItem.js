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
        
    }



    addBtn(){
       
        const val = this.inRef.current.value
        if(val === ''){
            alert("Please enter Item ):")
        }
        else {
           
           this.setState({
               item: val,
               list: [...this.state.list,this.state.item]
            })
           this.inRef.current.value = ''
           console.log(this.state.list)
        }
    }



    render(){
        
   
        return(
            
            <div>
                <input type='text' placeholder='Enter Todo item' ref={this.inRef}
                onChange={this.props.onClick}></input>
                <button onClick={this.addBtn} >Add</button>
                
                <ItemList items={this.state.list}/>
                
            </div>
                

        )
    }
}



export default AddItem