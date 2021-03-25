import React, { Component, Fragment } from 'react';
import {BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar'
import AddContact from './components/add-contact/add-contact'
import ContactList from './components/contact-list/contact-list'
import HiddenList from './components/contact-list/hidden-list'
import FavoriteList from './components/contact-list/favorite-list'
import FindList from './components/contact-list/find-list'
import NoteList from './components/note-list/note-list'
import GroupList from './components/group-list/group-list'
import AddGroup from './components/add-group/add-group'
import AddInGroup from './components/add-group/add-in-group'
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
      isHidden: true,
      groupId: 0
    },
    {
      id: 2,
      name: "Vika Zakotyuk",
      number: "+38 (097) 77 77 777",
      image: 0,
      gender: "women",
      isFavorite: false,
      isHidden: false,
      groupId: 0
    },
    {
      id: 3,
      name: "Andrii Riabii",
      number: "+38 (095) 41 66 765",
      image: 67,
      gender: "men",
      isFavorite: true,
      isHidden: false,
      groupId: 0
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
  groups: [
    {
      id: 1,
      name: "ПВ926",
      image: "https://cdn.vox-cdn.com/thumbor/9qN-DmdwZE__GqwuoJIinjUXzmk=/0x0:960x646/1200x900/filters:focal(404x247:556x399)/cdn.vox-cdn.com/uploads/chorus_image/image/63084260/foodlife_2.0.jpg"
    },
    {
      id: 2,
      name: "34С18-4ПА",
      image: "https://cdn.vox-cdn.com/thumbor/9qN-DmdwZE__GqwuoJIinjUXzmk=/0x0:960x646/1200x900/filters:focal(404x247:556x399)/cdn.vox-cdn.com/uploads/chorus_image/image/63084260/foodlife_2.0.jpg"
    },
    {
      id: 3,
      name: "ПВ927",
      image: "https://cdn.vox-cdn.com/thumbor/9qN-DmdwZE__GqwuoJIinjUXzmk=/0x0:960x646/1200x900/filters:focal(404x247:556x399)/cdn.vox-cdn.com/uploads/chorus_image/image/63084260/foodlife_2.0.jpg"
    }
  ],
  loading: false

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
addGroup = (newGroup) => {
  var tempGroups = [];
  if (this.state.groups != null) {
    tempGroups = this.state.groups.slice();//coppy array
  }
  newGroup.id = this.state.groups.length +1;
  tempGroups.push(newGroup);
  this.setState({
    groups: tempGroups
  })
  console.log(tempGroups.length);
}
removeGroup = (group) => {
  var tempGroups = [];
  console.log('removing: ');
  console.log(group);
  if (this.state.groups != null) {
    var foundIndex = this.state.groups.findIndex(x => x.id == group.id);
    this.state.groups.splice(foundIndex, 1);
    this.setState({
      statusDelete: true
    });
  }


}

addInGroup = (e) => {
  var contact = this.state.contacts.filter(function(item){
    return item.name.toLowerCase().search(e.contacts.toLowerCase())!== -1;
  })
  var group = this.state.groups.filter(function(item){
    return item.name.toLowerCase().search(e.groups.toLowerCase())!== -1;
  })
    contact.First().groupId = 11;
  var tempContacts = [];
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();
      var foundIndex = tempContacts.findIndex(x => x.id == contact.id);

      tempContacts.splice(foundIndex, 1, contact);
      this.setState({
        contacts: tempContacts
      })
    }
    console.log(this.state.contacts);
    console.log(contact);
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
              <ContactList  removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></ContactList>
              <button type="button" class="collapsible">Hidden Contacts</button>
              <HiddenList  removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></HiddenList>
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
            render = {() => <FavoriteList  removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></FavoriteList>}
            ></Route>
            <Route
              path="/add-contact"
              exact
              render = {() => <AddContact addContact={this.addContact}></AddContact>}
            ></Route>
            <Route
              path="/test/:id"
              exact
              component = {Test}
            ></Route>
            <Route
              path="/find"
              exact
              render = {() => <FindList  removeContact={this.removeContact} updateContact={this.updateContact} contacts={this.state.contacts}></FindList>}
            ></Route>
            <Route
              path="/add-group"
              exact
              render = {() => <AddGroup addGroup={this.addGroup}></AddGroup>}
            ></Route>
            <Route
            path="/add-in-group"
            exact
            render = {() => <AddInGroup addInGroup={this.addInGroup}></AddInGroup>}
            ></Route>
            <Route
              path="/group-list"
              exact
              render = {() => <GroupList removeGroup={this.removeGroup} groups={this.state.groups}></GroupList>}
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
