import React, { Component, Fragment } from 'react';
import GroupItem from '../group-item/group-item';

const GroupList = ({ groups , removeGroup, addStudentInGroup}) =>{
    var groupsTempleate;
    if(groups !== null){
        groupsTempleate = groups.map(item => {
            return(
                <GroupItem removeGroup={removeGroup} 
                key = {item.id}
                id = {item.id}
                name = {item.name}
                image = {item.image}
                ></GroupItem>
            ) 
            
        })
    }   
    return(
        <Fragment>
            <div className=" bord   row">
                {groupsTempleate} {}
            </div>
        </Fragment>
    )
  }

  export default GroupList;
