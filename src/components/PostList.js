import { PostContext } from "../contexts/PostContext"
import { useContext } from "react";
import PostDetails from "./PostDetails"

const PostList = () => {
    const {posts} = useContext(PostContext)
    return posts.length ? (
        <div className="post-list">
            <ul>
                {posts.map(post => {
                    return (<PostDetails post={post} key={post.id} />)
                })}
            </ul>
        </div>
    ): (
        <div className="empty">No posts to read. Hello free time </div>
    )
}
export default PostList;