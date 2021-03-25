import React, { Component, Fragment } from 'react';

class AddInGroup extends Component{
    state = {
        contacts: "",
        groups: ""
    }  
    isValid = () => {
        if(this.state.contacts === "" || this.state.groups === ""){
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
            groups: this.state.groups,
            contacts: this.state.contacts
          };
          this.props.addInGroup(newContact);
        }
        else{
          this.setState({
            MessageError:"Please, enter all fields!"
          })
        }
      }

      hendlerChangeInput = (e) =>{
        var key = e.target.name;
        var value = e.target.value;
        this.setState({
          [key]: value
        });
    
      }

    render(){
      return (
          <Fragment>
            <div className=" row">
                <form onSubmit={this.submitForm}>
                    <input className="inp" onChange={this.hendlerChangeInput}id="contacts" name="contacts" type="text" placeholder="Contact Name"/>
                    <input className="inp" onChange={this.hendlerChangeInput}id="groups" name="groups" type="text" placeholder="Group Name"/>
                  <button type="submit" className="bt btn btn-primary inp" >Add in group</button>
                </form>
            </div>
          </Fragment>
      )
    }
  }
  
  export default AddInGroup;

