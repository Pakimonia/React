import React, { Component, Fragment } from 'react';
import './note-item.css';

class NoteItem extends Component{
    state = {
        title: this.props.title,
        text: this.props.text
    }
    

    render(){
        const {title, text} = this.state;
      return (
          <Fragment>
            <div class="card col-sm-3 marg">
              <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">{text}</p>
              </div>
            </div>
          </Fragment>
      )
    }
  }
  
  export default NoteItem;

