import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
//import './addItem.css'
import Item from './Item'



class AddItem extends Component{
    
    constructor(){
        super();
        this.state = {
                item: ''        
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
           //alert(val)
           this.setState({item: val})
           
           this.inRef.current.value = ''
           
        }
    }



    render(){
        
   
        return(
            
            <div>
                <input type='text' placeholder='Enter Todo item' ref={this.inRef}
                onChange={this.props.onClick}></input>
                <button onClick={this.addBtn} >Add</button>
                
                <Item value={this.state.item}/>
                
            </div>
                

        )
    }
}



export default AddItem