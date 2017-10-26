import React, { Component } from 'react';
import './App.css';
import {addComment, removeComment} from './actions'
import avatar from './avatar.svg';
import {connect} from 'redux-zero/react'

const Post = ({name, comment, removeComment}) =>{
  return(
    <li>
      <img alt='avatar' src={avatar} className='avatar'/>
      <h3 className='name'><strong>{name}</strong></h3>
      <span>{comment}</span> 
      <button onClick={removeComment} className='remove'>remove</button>
    </li>
  )
}

const App = ({comments}) => {
  const onSubmit = (e) => {
		e.preventDefault();
		//console.log ( 'this..', this);//con truco, es el connect el this.
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
        removeComment={()=> removeComment(index)}
      />
    )
  })

  return (
    <div className="wrapper">
      <header>
        <h1 style={{fontSize: '3.5em'}}> New Comment </h1>
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
