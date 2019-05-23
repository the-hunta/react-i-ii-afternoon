import React, {Component} from 'react'

export default class CardInfo extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        console.log(this.props)
        return(
            <div style={{height:'400px', width: '900px' ,background: 'white', position: 'relative', top: '70px', left: '200px',}}>
                    <h2 style={{position:'relative', left:'820px', fontSize:'26px' }}> {this.props.person.id}/25 </h2>
                    <h1 style={{position:'relative', left:'65px',textDecoration:'underline', textDecorationColor:'#34A5DA',}}>{this.props.person.name.first} {this.props.person.name.last}</h1>
                    <h2 style={{position:'relative', left:'65px'}}>From: {this.props.person.city}, {this.props.person.country}</h2>
                    <h2 style={{position:'relative', left:'65px'}}>Job Title: {this.props.person.title}</h2>
                    <h2 style={{position:'relative', left:'65px'}}>Employer: {this.props.person.employer}</h2>
                    <h2 style={{position:'relative', left:'65px'}}>Favorite Movies: {this.props.person.favoriteMovies}</h2>
            </div>

        )
    }
}