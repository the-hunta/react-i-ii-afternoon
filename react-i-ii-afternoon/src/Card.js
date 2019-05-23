import React, { Component } from 'react'
import CardInfo from './CardInfo';


export default class Card extends Component{
    constructor(props){
        super(props)

        this.state = {
           count: 0
        }
    }

    next=()=>{this.setState({count:this.state.count + 1})}
    previous=()=>{this.setState({count:this.state.count - 1})}

    render(){
       let mappedArr= this.props.data.map((element) => {return < CardInfo key={element.id} person={element}/>});

        return(
            <div style={{ height: '100vh', width: '100vw', background: '#282c34'}}> 
            {mappedArr[this.state.count]}
            <button onClick={this.previous } style={{position:'relative', left: '600px', top: '80px' }} >Previous</button>
            <button onClick={this.next} style={{position:'relative', left: '600px', top: '80px' }}>Next</button>
            </div>

        )
    }
}

//()=>{}
//parameter => results/actions

//function fnName(parameters){results/actions}