import React, { Component, Fragment } from 'react';
import ContactItem from '../contact-item/contact-item';

const FavoriteList = ({ contacts , removeContact, updateContact, editContact}) =>{
    var contactsTempleate;
    if(contacts !== null){
        contactsTempleate = contacts.map(item => {
            if(item.isFavorite == true)
            {
                return(
                    <ContactItem removeContact={removeContact} updateContact={updateContact} editContact={editContact}
                    key = {item.id}
                    id = {item.id}
                    name = {item.name}
                    number = {item.number}
                    gender = {item.gender}
                    image = {item.image}
                    isFavorite={item.isFavorite}
                    isHidden = {item.isHidden}
                    ></ContactItem>
                ) 
            }
            
            
        })
    }   
    return(
        <Fragment>            
            <div className=" bord row">
                {contactsTempleate} {}
            </div>
        </Fragment>
    )
  }

  export default FavoriteList;
