import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';

class Item extends Component {
    

    render(){
        
        return(
            <p style={{color:'blue', 
            textDecoration:this.props.txdeco}}> 
               Added Item:  {this.props.value} 
               <button onClick={() => this.props.itemCheck(this.props.id)}><i className='fa fa-check'></i></button>
               <button onClick={() => this.props.edit(this.props.id)}><i className='fa fa-edit'></i></button>
               <button onClick={() => this.props.remove(this.props.id)} ><i className='fa fa-close'></i></button>
            </p>
            
        )  
    }
}

export default Item