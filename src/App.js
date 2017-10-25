import React, { Component } from 'react';
import './App.css';
import {addComment} from './actions'
import {connect} from 'redux-zero/react'

/*const Post = ({comments}) =>{
  return(
    <div key={index}>{guest.name}
      <br/>{guest.comment}
    </div>
  )
}*/

const App = ({comments}) => {
  const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
		addComment(this.playerInputRef.value)
  }
  
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
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="User" />      
          <input type="text" placeholder="Comment" ref={(e) => this.playerInputRef = e}/>
          <button type="submit">Post Comment</button>
        </form>         
      </header>
      <div className="main">	
        <h2>Comments</h2>
        <p> {comments.length}</p>
        <ul>
          {commentsList}
        </ul>
      </div>
    </div>
  );
}


const mapToProps = ({comments}) => ({comments})
export default connect(mapToProps) (App);
