import React, { Component } from 'react';

class Filter extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.name;
        this.props.filter(name)
        // if(name === 'active'){
        //     this.props.filter('none')
        // }
        // else if(name === 'complete'){
        //     this.props.filter('line-through')
        // }
        //this.props.filter({name});
      }

    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                <button name='all' onClick={this.handleChange}>All</button>
                <button style={{ marginLeft: '15px' }} name='active' 
                onClick={this.handleChange}>Active</button>
                <button style={{ marginLeft: '15px' }} name='complete'
                onClick={this.handleChange}>Complete</button>
            </div>
        )
    }
}
export default Filter
