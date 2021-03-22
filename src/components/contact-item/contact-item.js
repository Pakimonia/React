import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component{
    state = {
      id: this.props.id,
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender: this.props.gender,        
        isFavorite: this.props.isFavorite,
        isHidden: this.props.isHidden
        // isFaiv: this.props.isFaiv ,
        // star: "far fa-star"
    }
    setRandomImage = () => {
        var randomAvatar = Math.floor(Math.random()* Math.floor(99));
        this.setState({
          image: randomAvatar
        });
    }
    //setStarr = () => {
    //  if(this.state.isFaiv)
    //  {
    //    this.setState({
    //      star: "fas fa-star"
    //    });
    //    this.setState({
    //      isFaiv: false
    //    });
    //  }
    //  else
    //  {
    //    this.setState({
    //    star: "far fa-star"
    //    });        
    //    this.setState({
    //    isFaiv: true
    //    });
    //  }
    //}
    setIsFavorite = () => {

      var contact = {
          id : this.state.id,
          name: this.state.name,
          number: this.state.number,
          image: this.state.image,
          gender: this.props.gender,
          isFavorite: !this.state.isFavorite,
          isHidden: this.state.isHidden
      } 
      this.props.updateContact(contact);

      this.setState({
          isFavorite : !this.state.isFavorite
      })
  }
  setIsHidden = () => {

    var contact = {
        id : this.state.id,
        name: this.state.name,
        number: this.state.number,
        image: this.state.image,
        gender: this.props.gender,
        isFavorite: this.state.isFavorite,
        isHidden: !this.state.isHidden
    } 
    this.props.updateContact(contact);

    this.setState({
        isHidden : !this.state.isHidden
    })
}
    delete = () =>{
      console.log(this.state.id + 'to delete')
      var contact = {
      id : this.state.id,
      name: this.state.name,
      number: this.state.number,
      image: this.state.image,
      gender: this.props.gender,
      isFavorite: this.state.isFavorite,
      isHidden: this.state.isHidden
  }
  this.props.removeContact(contact);

  }
  edit = () => {
    var contact = {
        id: this.props.id,
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender: this.props.gender,        
        isFavorite: this.props.isFavorite
    }
    this.props.editContact(contact)
  }




    render(){
        const {name, number, image, gender, isFaiv, isFavorite, isHidden} = this.state;
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
        var star = `far fa-star star`;
        var eye = `far fa-eye`;
        if(isFavorite == true)
        {
          star=`fa fa-star star`;
        }
        if(!isHidden == true)
        {
          eye = `far fa-eye-slash`;
        }
      return (
          <Fragment>
            <div className="card wid cardd col-sm-4">
              <img src={image_URL}  className="card-img-top" />
              <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{number}</p>
                  <button onClick={this.setRandomImage} className="btn btn-primary">Random image</button>
                  <button onClick={this.setIsFavorite} className="btn smal"><i className={star}></i></button>
                  <button  onClick={this.delete} className="btn smal"><i className="red fas fa-trash"></i></button>
                  <button  onClick={this.edit} className="btn smal"><i className="orange far fa-edit"></i></button>
                  <button  onClick={this.setIsHidden} className="btn smal"><i className={eye}></i></button>
              </div>
            </div>
          </Fragment>
      )
    }
  }
  
  export default ContactItem;

