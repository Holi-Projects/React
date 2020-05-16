import React from 'react';
import Item from './Item'


// class Items extends Component{

//     constructor(){
//         super()
//         this.state = {
//             items: []
//         }
       
        
//     }
//     render(){
        
//         return(
            
//             <div>
//                 {this.state.items.map((val, i) => <li key = {i}>
//                     <Item value={val} />
//                     </li> )}
//             </div>
                

//         )
//     }
// }

//works when this is a stateless function

const Items = (props) => {

    return (

        <div>
            {props.items.map((val, i) => <div key={i}>
                <Item value={val} />
                {/* {val} */}
            </div>)}
        </div>

    
    )
}


export default Items