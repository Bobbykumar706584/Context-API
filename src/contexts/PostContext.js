import { createContext, useReducer, useEffect } from "react";
import { postReducer } from "../reducers/PostReducer";

export const PostContext = createContext()

const PostContextProvider = (props) =>{
    const [posts, dispatch] = useReducer(postReducer, [], () => {
        const localData = localStorage.getItem('posts');
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts))
    }, [posts])

    return(
        <PostContext.Provider value={{posts, dispatch}}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;