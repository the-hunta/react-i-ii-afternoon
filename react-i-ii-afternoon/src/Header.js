import React, { Component } from 'react'

export default class Header extends Component{
    render(){
        return(
            <div className="Header" style={{background: '#34A5DA', height: '20vh', width: '102vw', margin: '-21px'}}>
                 <h1 style={{textColor: "black", position: 'relative', left:'90px', top: '45px', fontSize:'25px' }}>Home</h1>
            </div>
        )
    }
}