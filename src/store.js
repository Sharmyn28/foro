import createStore from 'redux-zero'

const COMMENTS = [
    {
       name: 'Song 1',
       comment : 'Artist 1',
    },
    {
        name: 'Song 2',
        comment : 'Artist 2',
    },
    {
        name: 'Song 3',
        comment : 'Artist 3',
    },
 ]
 
 const initialState = {
    comments : COMMENTS,
 }
 
 const store = createStore (initialState)
 export default store;