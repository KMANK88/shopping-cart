import React from 'react';

const Profile = (props) => {
  return(
    <div>
      <h1> {props.user.fName}</h1>
      <h2> {props.user.lName}</h2>
      <img src={props.user.avatar}/>
      <h2> {props.user.email}</h2>
    </div>
  )
}

export default Profile;
