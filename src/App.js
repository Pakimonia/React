import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import AddContact from './components/add-contact/add-contact'
import ContactItem from './components/contact-item/contact-item'
import ContactList from './components/contact-list/contact-list'
import NoteItem from './components/note-item/note-item'
import NoteList from './components/note-list/note-list'
class App extends Component{

state = {
  contacts: [
    {
      name: "Dmytro Hnatuk",
      number: "+38 (066) 75 45 782",
      image: 0,
      gender: "men"
    },
    {
      name: "Vika Zakotyuk",
      number: "+38 (097) 77 77 777",
      image: 0,
      gender: "women"
    },
    {
      name: "Andrii Riabii",
      number: "+38 (095) 41 66 765",
      image: 67,
      gender: "men"
    }
  ],
  notes:[
    {
      title: "First note",
      text: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
    },
    {
      title: "Second note",
      text: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
    },
    {
      title: "Third note",
      text: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
    }
  ]
}

addContact = (newContact) => {
  var tempContacts = [];
  if(this.state.contacts != null) {
    tempContacts = this.state.contacts.slice();
  }
  tempContacts.push(newContact);
  this.setState({
    contacts: tempContacts
  });
}

  render(){
    return (
      <Fragment>
        <Navbar></Navbar>

      
      <div className="container">
        <div className="row">
          <AddContact addContact={this.addContact}></AddContact>
          <div className="col-sm-9 bord ">
            <div className="row">
              <ContactList contacts={this.state.contacts}></ContactList>
          </div>
          
        </div>
        </div>
        <div className="col-sm-11 bord mr">
          <div className="row">
            <NoteList notes={this.state.notes}></NoteList>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default App;
