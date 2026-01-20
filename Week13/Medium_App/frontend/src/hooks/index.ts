import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
// import { useParams } from "react-router-dom";
// import { number, string } from "zod";


export interface BlogParams{
        "content": string,
        "title": string,
        "id": number,
        "createdAt": Date,
        "author": {
            "name": string
        }

}

export const useBlog = ({id}: {id: string})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogParams>();

    // const id = useParams();


    useEffect (() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}` , {
            headers :{
                Authorization : localStorage.getItem("token")
            }
        })
        .then( res =>{
            setBlog(res.data.blog)
            setLoading(false) 
        })
        
    }, [id])


    return {
        loading,
        blog
    }
}
export const useBlogs = ()=>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogParams[]>([]);


    useEffect (() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk` , {
            headers :{
                Authorization : localStorage.getItem("token")
            }
        })
        .then( res =>{
            setBlogs(res.data.blogs)
            setLoading(false) 
        })
        
    }, [])


    return {
        loading,
        blogs
    }
}