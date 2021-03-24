import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import AddContact from './components/add-contact/add-contact'
import ContactList from './components/contact-list/contact-list'
import HiddenList from './components/contact-list/hidden-list'
import FavoriteList from './components/contact-list/favorite-list'
import FindList from './components/contact-list/find-list'
import NoteList from './components/note-list/note-list'
import {BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Page404 from './components/page404/page404';
import Test from './components/test/test';





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
  newContact.id = this.state.contacts.length +1;
  tempContacts.push(newContact);
  this.setState({
    contacts: tempContacts
  })
  console.log(tempContacts.length);
}
updateContact = (contact) => {
  var tempContacts = [];
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();
      var foundIndex = tempContacts.findIndex(x => x.id == contact.id);

      tempContacts.splice(foundIndex, 1, contact);
      this.setState({
        contacts: tempContacts
      })
    }

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
        <Router>
          <Navbar></Navbar>

      
      <div className="container">
        <div className="row">
          <Switch>
          <Route
              path="/"
              exact
              render = {() => <Home></Home>}
            ></Route>
            <Route
              path="/contact-list"
              exact
              render = {() => <Fragment> 
              <ContactList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></ContactList>
              <button type="button" class="collapsible">Hidden Contacts</button>
              <HiddenList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></HiddenList>
              </Fragment>}
            ></Route>
            <Route
            path="/note-list"
            exact
            render = {() => <NoteList notes={this.state.notes}></NoteList>}
            ></Route>
            <Route
            path="/favorite-list"
            exact
            render = {() => <FavoriteList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></FavoriteList>}
            ></Route>
            <Route
              path="/add-contact"
              exact
              render = {() => <AddContact editContact={this.state.editContactt} addContact={this.addContact}></AddContact>}
            ></Route>
            <Route
              path="/test/:id"
              exact
              component = {Test}
            ></Route>
            <Route
              path="/find"
              exact
              render = {() => <FindList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></FindList>}
            ></Route>
            <Route
            path="*"
            render={() => <Page404></Page404>}
            ></Route>
            





          {/*<AddContact editContact={this.state.editContactt} addContact={this.addContact}></AddContact>*/}
          {/*<ContactList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></ContactList>*/}
          {/*<NoteList notes={this.state.notes}></NoteList
          <button type="button" class="collapsible">Hidden Contacts</button>
          <HiddenList editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></HiddenList>*/}
          </Switch>
        </div>
      </div>
      </Router>
      </Fragment>
    )
  }
}

export default App;
