import React, { Component } from 'react';
import './App.css';
//import {playAction, nextAction, stopAction} from './actions'
import {connect} from 'redux-zero/react'

const App = ({comments}) => {
  const commentsList = comments.map((guest, index)=>{
    return(
    <li key={index}>{guest.name}
      <br/>{guest.comment}
    </li>)
  });
  return (
    <div className="wrapper">
      <header>
        <p> New Comment </p>
        <form >
          <input type="text" placeholder="User"/>      
          <input type="text" placeholder="Comment"/>
          <button type="submit">Post Comment</button>
        </form>         
      </header>
      <div className="main">	
        <h2>Comments</h2>
        <p>model.guests.length</p>
        <ul>
          {commentsList}
        </ul>
      </div>
    </div>
  );
}


const mapToProps = ({comments}) => ({comments})
export default connect(mapToProps) (App);
