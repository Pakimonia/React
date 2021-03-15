import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component{
    state = {
        name: "Dmytro Hnatuk",
        number: "+38 (066) 75 45 782",
        image: "https://image.shutterstock.com/z/stock-vector-vector-male-face-avatar-logo-template-pictogram-button-round-trendy-flat-icon-with-man-for-424261807.jpg"
    }

    render(){
        const {name, number, image} = this.state
      return (
          <Fragment>
            <div class="card wid">
                <img src={image} width="150" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{number}</p>
                    <a href="#" class="btn btn-primary">More info</a>
                </div>
            </div>
          </Fragment>
      )
    }
  }
  
  export default ContactItem;

