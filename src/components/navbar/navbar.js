import React, { Component, Fragment } from 'react';
import './navbar.css';
import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
      return (
          <Fragment>
            <div className="navbar">
          
                <ul >
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/contact-list">Contact List </Link></li>
                    <li><Link to="/add-contact">Add Contact</Link></li>
                    <li><Link to="/favorite-list">Favorite List</Link></li>
                    <li><Link to="/note-list">Note List</Link></li>
                    <li><Link to="/group-list">Group List </Link></li>
                    <li><Link to="/add-group">Add Group</Link></li>
                    <li><Link to="/add-in-group">Add Student In Group </Link></li>
                </ul>
            </div>
          </Fragment>
      )
    }
  }
  
  export default Navbar;

