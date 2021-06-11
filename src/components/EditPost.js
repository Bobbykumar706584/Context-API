import {useState, useContext} from 'react'
import { PostContext } from '../contexts/PostContext';
import { useHistory } from 'react-router-dom';


const EditPost = () => {
    const { dispatch } = useContext(PostContext)
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [username, setUsername] = useState('')

    const handleUpdate=(e) =>{
        e.preventDefault()
        history.push('/')
    }

    return ( 
        <form onSubmit={handleUpdate}> 
            <h1>Update form</h1>
            <hr />
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" />
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Post body" />
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="submit" value="Update post"/>
        </form>
     );
}
 
export default EditPost;