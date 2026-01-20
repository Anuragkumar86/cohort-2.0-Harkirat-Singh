import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
// import BlogDetail from "../components/BlogDetail";
import { useBlog } from "../hooks";
import BlogDetail from "../components/BlogDetail";
import { SingleSkeleton } from "../components/Single_SLecton";
// import LoadingSkeletonBlog from "../components/Skeleton_Single_Blox";

export const Blog = () => {
    const {id} = useParams()
    const {loading, blog} = useBlog({
        id : id || ""
    })

    if(loading){
        return <div>
            {/* <LoadingSkeletonBlog/> */}
            <SingleSkeleton/>
        </div>
    }

    return <div>
        <AppBar/>
    <div>
        <BlogDetail blog={blog}/>
    </div>
    </div>
}