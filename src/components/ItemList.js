import React,{Component} from 'react';
import Item from './Item'
import Filter from './Filter'




class Items extends Component{
            constructor(props){
                super(props)
                this.state = {
                    filter: '',
                    clickFilter: false
                }
            }

    //get the filter key word 
    filterItem = (input) => {
        this.setState({ filter: input})
        this.setState({clickFilter: true})
    }

    render(){
        const filterList = []
        const list = this.props.items
        .map((item, i) => 
           <Item key={i}
                    value={item.name} 
                    id={i}
                    txdeco={item.txdeco}
                    edit={this.props.itemEdit} 
                    remove={this.props.rm}
                    itemCheck={this.props.check}
                    
                />)
              
            //iterate through the list and display items according to filter    
             list.forEach( item => {
    
                if(this.state.filter === 'all'){
                    filterList.push(item)
                }
                else if (this.state.filter === 'active' && item.props.txdeco==='none'){
                    filterList.push(item)
                }
                else if(this.state.filter === 'complete' 
                && item.props.txdeco==='line-through'){
                    filterList.push(item)
                }
             
             })
         
        if(list.length === 0) 
        return (<p>No items added</p>)

        else
          
        return(
            
            <div >
                 <div>
                    <Filter filter={this.filterItem}/>
                </div>
                <div>{this.state.clickFilter? filterList : list}</div>
                
            </div>
                
        )
    }
}


export default Items