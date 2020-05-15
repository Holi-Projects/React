import React, { Component } from 'react';
//import 'font-awesome/css/font-awesome.min.css';
//import './addItem.css'



class AddItem extends Component{
    
    constructor(){
        super();
        this.state = {
                item: '',
                list: []
                  
        }

        this.inRef = React.createRef();
        this.addBtn = this.addBtn.bind(this)
        //this.rmItem = this.rmItem.bind(this)
    }



    addBtn(){
       
        const val = this.inRef.current.value
        if(val === ''){
            alert("Please enter Item ):")
        }
        else {
           //alert(val)
           this.setState({item: val})
           this.state.list.push(val)
           this.inRef.current.value = ''
           //console.log(this.state.list)
        }
    }

    
     
     rmItem = (e) => {
         
         alert(e.target.value)
         //console.log(this.state.list)
    }


    render(){
       
   
        return(
            <div>
                <input type='text' placeholder='Enter Todo item' ref={this.inRef}
                ></input>
                <button onClick={this.addBtn}>Add</button>

                { 
                    <div className='item'>
                        {this.state.list.map(item => (
                            <li key={item}>
                                {item}
                                <button><i className='fa fa-check'></i></button>
                                <button value={this.state.list.indexOf(item)} onClick={this.rmItem}>
                                <i className='fa fa-edit'></i></button>
                                <button onClick={() => alert(this.state.list.indexOf(item))}>
                                    <i className='fa fa-close'></i></button>
                                </li>
                        ))}
                    
                    </div>
                
               }
            </div>
            
        )
    }
}



export default AddItem