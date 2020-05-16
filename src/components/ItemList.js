import React, { Component } from 'react';
import Item from './Item'


class Items extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
       
        
    }

    // componentDidMount(){
    //     this.setState({
    //         items: [...this.state.items, <Item />]
    //  })
    //     console.log(this.state.items)
        
    //     }
    

    render(){
        
        return(
            
            <div>
                {this.state.items.map((val, i) => <li key = {i}>{val }</li> )}
                     
                
                {/* {this.state.items.map((val, i) => (
                <Item 
                    key = {i}
                    value={val}
                /> 
                ))} */}
            </div>
                

        )
    }
}


export default Items