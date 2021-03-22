import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import AddContact from './components/add-contact/add-contact'
import ContactList from './components/contact-list/contact-list'
import HiddenList from './components/contact-list/hidden-list'
import NoteList from './components/note-list/note-list'
class App extends Component{

state = {
  statusDelete: false,
  contacts: [
    {
      id: 1,
      name: "Dmytro Hnatuk",
      number: "+38 (066) 75 45 782",
      image: 0,
      gender: "men",
      isFavorite: true,
      isHidden: true
    },
    {
      id: 2,
      name: "Vika Zakotyuk",
      number: "+38 (097) 77 77 777",
      image: 0,
      gender: "women",
      isFavorite: false,
      isHidden: false
    },
    {
      id: 3,
      name: "Andrii Riabii",
      number: "+38 (095) 41 66 765",
      image: 67,
      gender: "men",
      isFavorite: true,
      isHidden: false
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
  ],
  editContactt: ""

}

addContact = (newContact) => {
  var tempContacts = [];
  if (this.state.contacts != null) {
    tempContacts = this.state.contacts.slice();//coppy array
  }
  newContact.id = tempContacts.length;
  tempContacts.push(newContact);
  this.setState({
    contacts: tempContacts
  })
}
updateContact = (contact) => {
  var tempContacts = [];
  if (this.state.contacts != null) {
    tempContacts = this.state.contacts.slice();
    var foundIndex = tempContacts.findIndex(x => x.id == contact.id);
    tempContacts[foundIndex] = contact;
  }

  this.setState({
    contacts: tempContacts
  })
}
removeContact = (contact) => {
  var tempContacts = [];
  console.log('removing: ');
  console.log(contact);
  if (this.state.contacts != null) {
    var foundIndex = this.state.contacts.findIndex(x => x.id == contact.id);
    this.state.contacts.splice(foundIndex, 1);
    this.setState({
      statusDelete: true
    });
  }
}
editContact = (contact) => {
  this.setState({
    editContactt: contact
  })
}

  render(){
    return (
      <Fragment>
        <Navbar></Navbar>

      
      <div className="container">
        <div className="row">
          <AddContact editContact={this.state.editContactt} addContact={this.addContact}></AddContact>
          <div className="col-sm-9 bord ">
            <div className="row">
              <ContactList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></ContactList>
          </div>
          
        </div>
        </div>
        <div className="col-sm-11 bord mr">
          <div className="row">
            <NoteList notes={this.state.notes}></NoteList>
          </div>
        </div>
          <button type="button" class="collapsible">Hidden Contacts</button>
          <div className="col-sm-11 bord mr content">
          <div className="row">
          <HiddenList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></HiddenList>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default App;
