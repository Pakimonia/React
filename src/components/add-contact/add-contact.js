import React, { Component, Fragment } from 'react';
import './add-contact.css';

class AddContact extends Component{
    render(){
      return (
          <Fragment>
            <div class="col-sm-2 bord formm">
                <h4>Add new contact</h4>
                <input class="inp" type="text" placeholder="Name"/>
                <input class="inp" type="text" placeholder="Phone"/>
                <input class="inp" type="text" placeholder="Image URL"/>
                <select class="inp">
                  <option>Women</option>
                  <option>Men</option>
                </select>            
                <a class="btn btn-primary inp">Add contact</a>
            </div>
          </Fragment>
      )
    }
  }
  
  export default AddContact;

