import React, { Component, Fragment } from 'react';
import NoteItem from '../note-item/note-item';

const NoteList = ({ notes }) =>{
    var notesTempleate;
    if(notes !== null){
        notesTempleate = notes.map(item => {
            return(
                <NoteItem
                title = {item.title}
                text = {item.text}
                ></NoteItem>
            )
        })
    }   
    return(
        <Fragment>
            {notesTempleate}
        </Fragment>
    )
  }

  export default NoteList;
