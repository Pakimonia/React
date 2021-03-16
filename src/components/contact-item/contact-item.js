import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component{
    state = {
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender: this.props.gender,
        star: "far fa-star"
    }
    setRandomImage = () => {
        var randomAvatar = Math.floor(Math.random()* Math.floor(99));
        this.setState({
          image: randomAvatar
        });
    }
    setStarr = () => {
      if(this.state.star == "far fa-star")
      {
        this.setState({
          star: "fas fa-star"
        });
      }
      else
      {
        this.setState({
        star: "far fa-star"
      });        
      }
    }

    render(){
        const {name, number, image, gender, star} = this.state;
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
      return (
          <Fragment>
            <div class="card wid cardd col-sm-4">
              <img src={image_URL}  class="card-img-top" />
              <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <p class="card-text">{number}</p>
                  <button onClick={this.setRandomImage} class="btn btn-primary">Random image</button>                  
                  <button onClick={this.setStarr} class="btn"><i class={star}></i></button>
              </div>
            </div>
          </Fragment>
      )
    }
  }
  
  export default ContactItem;

