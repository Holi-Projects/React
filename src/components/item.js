import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


const Item = (props) => {

        if(props.value === '') return (<p>No items added</p>)
        else
        return(
            <p>
               Added Item:  {props.value} 
               <button><i className='fa fa-check'></i></button>
               <button><i className='fa fa-edit'></i></button>
               <button><i className='fa fa-close'></i></button>
            </p>
            
        )  
}

export default Item