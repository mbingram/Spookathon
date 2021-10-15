import React, { Component } from 'react'
import Navitem from './NavItem';

export default class NavBar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render(){
        return (
            <nav className="nav-bar">
                <img src="https://www.pngfind.com/pngs/m/37-379688_ghostbusters-ghostbusters-logo-png-transparent-png.png" alt="logo" className="logo"></img>
                <ul>
                    <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
                    <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
                    <Navitem item="Hire" tolink="/hire"  activec={this.activeitem}></Navitem>
                    <Navitem item="Reviews" tolink="/reviews"  activec={this.activeitem}></Navitem>
                    <Navitem item="Sightings" tolink="/sightings"  activec={this.activeitem}></Navitem>
                </ul>
            </nav>
        )
    }
}
