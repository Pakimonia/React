import React, { Component, Fragment } from 'react';
import './navbar.css';

class Navbar extends Component{
    render(){
      return (
          <Fragment>
            <div className="navbar">
          
                <ul >
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
          </Fragment>
      )
    }
  }
  
  export default Navbar;

