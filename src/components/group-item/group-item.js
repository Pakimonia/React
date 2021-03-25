import React, { Component, Fragment } from 'react';
import './group-item.css';
import {Link} from "react-router-dom";

class GroupItem extends Component{
    state = {
      id: this.props.id,
        name: this.props.name,
        image: this.props.image
        }
        
    
    delete = () => {
      console.log(this.state.id + 'to delete')
      var group = {
        id : this.state.id,
        name: this.state.name,
        image: this.state.image
      }
      this.props.removeGroup(group);
    }
    addStudentInGroup = () => {
      var group = {
        id : this.state.id,
        name: this.state.name,
        image: this.state.image
      }
      this.props.addStudentInGroup(group);
    }



    render(){
        const {name, image} = this.state;
      return (
          <Fragment>
            <div className="card wid cardd col-sm-4">
              <img src={image}  className="card-img-top" />
              <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <button  onClick={this.delete} className="btn smal"><i className="red fas fa-trash"></i></button>
              </div>
            </div>
          </Fragment>
      )
    }
  }
  
  export default GroupItem;

