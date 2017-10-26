import React, { Component } from 'react';
import './App.css';
import {addComment} from './actions'
import {connect} from 'redux-zero/react'

const Post = ({name, comment}) =>{
  return(
    <li>{name}
      <br/>{comment}
    </li>
  )
}

const App = ({comments}) => {
  const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    addComment(this.nameInputRef.value, this.commentInputRef.value)
    console.log(this.nameInputRef.value, this.commentInputRef.value)
    this.nameInputRef.value = '';
    this.commentInputRef.value = '';
  }
  
  const commentsList = comments.map((guest, index) =>{
    return(
      <Post 
        key={index}
        name={guest.name}
        comment={guest.comment}
      />
    )
  })

  return (
    <div className="wrapper">
      <header>
        <p> New Comment </p>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="User" ref={(e) => this.nameInputRef = e}/>      
          <input type="text" placeholder="Comment" ref={(e) => this.commentInputRef = e}/>
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
