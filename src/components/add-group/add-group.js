import React, { Component, Fragment } from 'react';
import './add-group.css';

class AddGroup extends Component{
  state = {
    id: 0,
    name: "",
    image: 0,
    MessageError: ""
  }
  hendlerChangeInput = (e) =>{
    var key = e.target.id;
    var value = e.target.value;
    this.setState({
      [key]: value
    });

  }
  isValid = () => {
    if(this.state.name === ""){
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
      var newGroup = {
        name: this.state.name,
        image: this.state.image
      };
      this.props.addGroup(newGroup);
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
            <div className=" bord formm">
                <h4>Add new group</h4>
                <form onSubmit={this.submitForm}>
                <input className="inp" onChange={this.hendlerChangeInput}id="name" name="name" type="text" placeholder="Name"/>
                <input className="inp" onChange={this.hendlerChangeInput}id="image" name="image" type="text" placeholder="Image URL"/>     
                <p className="text-danger">{MessageError}</p>     
                <button type="submit" className="bt btn btn-primary inp" >Add group</button>
            

                </form>
                </div>
          </Fragment>
      )
    }
  }
  
  export default AddGroup;

