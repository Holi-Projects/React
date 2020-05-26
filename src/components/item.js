import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';

class Item extends Component {
    
    // constructor(){
    //     super()
    //     this.state = {
    //         txdeco: 'none'
    //     }
    //     //this.itemCheck = this.itemCheck.bind(this)
    // }

    // itemCheck(){
    //     //asychronous implementation of setState() which doesnt rely on this.state
    //     this.setState((prevState, props) => ({
    //         txdeco: prevState.txdeco === 'none' ? 'line-through' : 'none'
    //       }));
        
    // }

    render(){
        
        return(
            <p style={{color:'blue', 
            textDecoration:this.props.txdeco}}> 
               Added Item:  {this.props.value} 
               <button onClick={this.props.itemCheck}><i className='fa fa-check'></i></button>
               <button onClick={this.props.edit}><i className='fa fa-edit'></i></button>
               <button onClick={() => this.props.remove(this.props.id)} ><i className='fa fa-close'></i></button>
            </p>
            
        )  
    }
}

export default Item