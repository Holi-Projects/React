import React,{Component} from 'react';
import Item from './Item'


class Items extends Component{
    

    itemEdit(){
        alert("edit")
    }




    render(){
         
        if(this.props.items.length === 0) return (<p>No items added</p>)
        else

        return(
            
            <div >
                {this.props.items.map((val, i) => <div key = {i} >
                    <Item 
                    value={val} 
                    id={i}
                    txdeco={this.props.deco}
                    edit={this.itemEdit} 
                    remove={this.props.rm}
                    itemCheck={() => this.props.check(i)}
                    
                    />
                    </div> )}
            </div>
                
        )
    }
}

//Test with a stateless function

// const Items = (props) => {

//     if(props.items.length === 0) return (<p>No items added</p>)
//         else
//     return (

//         <div>
//             {props.items.map((val, i) => <div key={i}>
//                 <Item value={val} />
//                 {/* {val} */}
//             </div>)}
//         </div>

    
//     )
// }


export default Items