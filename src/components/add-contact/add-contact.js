import React, { Component, Fragment } from 'react';
import './add-contact.css';

class AddContact extends Component{
  state = {
    name: "",
    number: "",
    image: 0,
    gender: "women",
    MessageError: ""
  }
  hendlerChangeInput = (e) =>{
    var key = e.target.name;
    var value = e.target.value;
    this.setState({
      [key]: value
    });

  }
  isValid = () => {
    if(this.state.name === "" || this.state.number === ""){
      return false;
    }
    else{
      return true;
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    if(this.isValid())
    {
      this.setState({
        MessageError:""
      })
      var newContact = {
        name: this.state.name,
        number: this.state.number,
        image: this.state.image,
        gender: this.state.gender
      };
      this.props.addContact(newContact);
    }
    else{
      this.setState({
        MessageError:"Please, enter all fields!"
      })
    }
  }
    render(){
      // console.log(this.state);
      const { MessageError } = this.state;
      return (
          <Fragment>
            <div className="col-sm-2 bord formm">
                <h4>Add new contact</h4>
                <form onSubmit={this.submitForm}>
                <input className="inp" onChange={this.hendlerChangeInput} name="name" type="text" placeholder="Name"/>
                <input className="inp" onChange={this.hendlerChangeInput} name="number" type="text" placeholder="Phone"/>
                <input className="inp" onChange={this.hendlerChangeInput} name="image" type="number" placeholder="Image number"/>
                <select className="inp" onChange={this.hendlerChangeInput} name="gender">
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                </select>       
                <p className="text-danger">{MessageError}</p>     
                <button type="submit" className="btn btn-primary inp" >Add contact</button>
            

                </form>
                </div>
          </Fragment>
      )
    }
  }
  
  export default AddContact;

