import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../contexts/PostContext';

const PostDetails = ({ post }) => {
    const {dispatch} = useContext(PostContext)
    return ( 
        <div className="post-box">
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
            <div className="username">{post.username}</div>
            <div>
                <button onClick={() => dispatch({type: "REMOVE_POST", id: post.id})}>Delete</button>
                <Link to={`/edit/${post.id}`}>
                    <button onClick={() => dispatch({type: "EDIT_POST", id: post.id})}>Edit</button>
                </Link>
            </div>
        </div>
     );
}
 
export default PostDetails;