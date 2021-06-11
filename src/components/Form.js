import {useState, useContext} from 'react'
import { PostContext } from '../contexts/PostContext';

const Form = () => {
    const { dispatch } = useContext(PostContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit=(e) =>{
        e.preventDefault()
        dispatch({type: 'ADD_POST', post:{
            title, body, username
        }})
        setTitle('')
        setBody('')
        setUsername('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" />
            <input type="text" required value={body} onChange={(e) => setBody(e.target.value)} placeholder="Post body" />
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="submit" value="Add post"/>
        </form>
     );
}
 
export default Form;