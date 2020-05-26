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
                txdeco: 'none'     
        }

        //this.inRef = React.createRef();
        this.addBtn = this.addBtn.bind(this)
        this.setItem = this.setItem.bind(this)
        this.rmitem = this.rmitem.bind(this)
        //this.itemCheck = this.itemCheck.bind(this)
    }

    setItem(event){
        //this.setState({item: this.inRef.current.value})
        this.setState({item: event.target.value})
    }

    //adding items to list on click
    addBtn(){
        const val = this.state.item
        //const val = this.inRef.current.value
        if(val === ''){
            alert("Please enter Item ):")
        }
        else {
           
           this.setState({
               list: [...this.state.list,this.state.item],
               item: '',
               txdeco: 'none'
            })
           //this.inRef.current.value = ''
        
        }
    }

    //Deleting items from the list of items
    rmitem(index){
        const arrayItem = [...this.state.list]
        if(index !== -1)
        arrayItem.splice(index, 1)
        this.setState({list: arrayItem})
        
    }

    itemCheck = (index) => {
       // asychronous implementation of setState() which doesnt rely on this.state

       const arrayItem = this.state.list.map( (item,i) => {
           if(i === index){
            //return {...item, txdeco: 'line-through'}
            this.setState({
                txdeco: this.state.txdeco==='none'?'line-through':'none'
            })
            //return {item,txdeco: this.state.txdeco==='none'?'line-through':'none'}
           }
           console.log(index)
           return this.state.txdeco
       }); 
            //this.setState({list: arrayItem})
        // this.setState({txdeco: this.state.txdeco==='none'?'line-through':'none'})
        // // this.setState((prevState, props) => ({
        // //     txdeco: prevState.txdeco === 'none' ? 'line-through' : 'none'
        // //   }));
        //this.setState({txdeco: arrayItem[index].txdeco})
         console.log(arrayItem[index]);
    }


    itemEdit = (index) => {
        
        const arrayItem = this.state.list.map( (item,i) =>{
            if(i === index){
                this.setState({ 
                    item,
                })
                
            };
            console.log(item)
            let rm = this.rmitem(index);
            return rm
        })
            //this.setState({list: arrayItem})
            console.log(arrayItem)
    }

    render(){
        
   
        return(
            
            <div>
                <input type='text' placeholder='Enter Todo item' value={this.state.item}
                // ref={this.inRef}
                onChange={this.setItem}></input>
                <button onClick={this.addBtn} >Add</button>
                
                <ItemList items={this.state.list} 
                deco={this.state.txdeco}
                rm={this.rmitem} 
                itemEdit={this.itemEdit}
                check={this.itemCheck}

                />
                
            </div>
                

        )
    }
}



export default AddItem