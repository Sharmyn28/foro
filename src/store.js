import createStore from 'redux-zero'

const COMMENTS = [
    {
       id: 1, 
       name: 'Lala',
       comment : 'Buen foro',
    },
    {
        id: 2,
        name: 'Paco',
        comment : 'Gran idea!',
    },
 ]
 
 const initialState = {
    comments : COMMENTS,
 }
 
 const store = createStore (initialState)
 export default store;