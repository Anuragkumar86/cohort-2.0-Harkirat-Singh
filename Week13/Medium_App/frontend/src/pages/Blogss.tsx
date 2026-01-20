import BlogCard from "../components/BlogCard";
import viratImage from "../../images/virat.jpg";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";
import LoadingSkeleton from "../components/Skeleton_main";

// const formattedDateTime = new Date(blog.createdAt).toLocaleString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true, // Ensures AM/PM format
// });

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
            <LoadingSkeleton/>
        </div>
    }
    
    return <div>
    <AppBar/>
    <div className="justify-center items-center min-h-screen ">
    {/* {console.log("Blog Date:", blog.createdAt)}; */}

     <div className="bg-gray-100 px-90 p-4">
     {blogs.map(blog => {
     console.log("Blog Object:", blog); // Print the entire object
     console.log("Blog Date:", blog.createdAt);

    const formattedDateTime = new Date(blog.createdAt).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // Ensures AM/PM format
    });

    return (
        
        <BlogCard
            id={blog.id}
            avatarSrc={viratImage}
            author={blog.author.name || "Anonymous"}
            date={formattedDateTime} 
            title={blog.title}
            description={blog.content.length > 100 ? blog.content.substring(0, 200) + "..." : blog.content}
            category="Side Hustle"
            readTime={Math.ceil((blog.content.length / 5) / 150)}
            imageSrc={viratImage}
        />
    );
})}

      
      
    </div>
    </div>
    </div>
}