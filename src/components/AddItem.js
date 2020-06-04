import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
//import './addItem.css'
import ItemList from './ItemList'



class AddItem extends Component{
    
    constructor(){
        super();
        this.state = {            
                item: '',
                list: [],
                     
        }

        this.addBtn = this.addBtn.bind(this)
        this.setItem = this.setItem.bind(this)
        this.rmitem = this.rmitem.bind(this)
        
    }

    //getting input value
    setItem(event){
        this.setState({item: event.target.value }) 
    }

    //adding items to list 
    addBtn(){
        const val = this.state.item
        
        if(val === ''){
            alert("Please enter Item ):")
        }
        else {
           const item = {name: this.state.item, txdeco: 'none'} 
           this.setState({
               //list: [...this.state.list,this.state.item],
               list: [...this.state.list, item],
               item: ''
            })
        
        }
    }

    //Deleting items from the list of items
    rmitem(index){
        const arrayItem = [...this.state.list]
        if(index !== -1)
        arrayItem.splice(index, 1)
        this.setState({list: arrayItem})
        
    }


    //Ticking items as done
    itemCheck = (index) => {
       const arrayItem = this.state.list.map( (item,i) => {
           if(i === index){
                // this.setState((prevState, props) => ({
                //      txdeco: prevState.txdeco === 'none' ? 'line-through' : 'none'
                //   }))
                return {...item, txdeco: item.txdeco === 'none'?'line-through':'none'}     
           }         
           return item
       }); 
        //console.log(arrayItem)   
        this.setState({list: arrayItem}) 
    }


    //editing items
    itemEdit = (index) => {       
        this.state.list.map( (item,i) =>{
            if(i === index){               
                this.setState({ 
                    item: item.name
                })               
            };
            console.log(item.name)
            let rm = this.rmitem(index);
            return rm
        })
    }

    render(){
   
        return(
            
            <div>
                <input type='text' placeholder='Enter Todo item' 
                value={this.state.item} 
                onChange={this.setItem}></input>
                <button onClick={this.addBtn} >Add</button>
                
                <ItemList 
                items={this.state.list} 
                rm={this.rmitem} 
                itemEdit={this.itemEdit}
                check={this.itemCheck}

                />
                
            </div>
                

        )
    }
}



export default AddItem