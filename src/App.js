import React, { Component, Fragment } from 'react';
import './App.css';
import ContactItem from './components/contact-item/contact-item'

class App extends Component{
  render(){
    return (
      <Fragment>
        <div className="navbar">
        <ul >
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </div>

      
      <div class="container">
        <div class="row">
        <div class="col-sm-2 bord">
            <input class="inp" type="text" placeholder="Name"/>
            <input class="inp" type="text" placeholder="Phone"/>
            <input class="inp" type="text" placeholder="Image URL"/>            
            <a href="#" class="btn btn-primary inp">Add contact</a>
          </div>
          <div class="col-sm-9 bord">
          <h2>First React App</h2>
            <ul>
              <li><ContactItem></ContactItem></li>
              <li><ContactItem></ContactItem></li>
            </ul>
          </div>
          
        </div>
      </div>
      </Fragment>
    )
  }
}

export default App;
