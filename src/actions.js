import store from './store'

export const addComment = (name, comment) => {
    const addCommentList = [...store.getState().comments, {
        id: store.getState().comments.length + 1,
        name: name,
        comment: comment,
    }];

    store.setState({
        comments: addCommentList
    })
}

