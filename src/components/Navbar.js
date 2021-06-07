import { PostContext } from "../contexts/PostContext";
import { useContext } from 'react'

const Navbar = () => {
    const {posts} = useContext(PostContext)
    
    return(
        <div className="navbar">
            <h1>Bobby reading list</h1>
            <p>Currently you have {posts.length} posts to get through</p>
        </div>
    )
}
export default Navbar;