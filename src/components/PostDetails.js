import React, { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';

const PostDetails = ({ post }) => {
    const {dispatch} = useContext(PostContext)
    return ( 
        <li onClick={() => dispatch({type: "REMOVE_POST", id: post.id})}>
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
            <div className="username">{post.username}</div>
        </li>
     );
}
 
export default PostDetails;