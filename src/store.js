import createStore from 'redux-zero'

const COMMENTS = [
    {
       id: 1, 
       name: 'Song 1',
       comment : 'Artist 1',
    },
    {
        id: 2,
        name: 'Song 2',
        comment : 'Artist 2',
    },
    {
        id: 3,
        name: 'Song 3',
        comment : 'Artist 3',
    },
 ]
 
 const initialState = {
    comments : COMMENTS,
 }
 
 const store = createStore (initialState)
 export default store;