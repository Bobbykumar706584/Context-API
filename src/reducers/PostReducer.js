import { v4 as uuidv4 } from 'uuid';

export const postReducer = (state, action) => {
    switch(action.type) {
        case "ADD_POST":
            return [...state, {
                title: action.post.title,
                body: action.post.body,
                username: action.post.username,
                id: uuidv4()
            }]
        case "REMOVE_POST":
            return state.filter(post => post.id !== action.id)
        case "EDIT_POST":
             return state.map(user => {
                 if (user.id === action.id) {
                     return action
                 }
                 return user
            })

        default:
            return state;        
    }
}