import { createBlogInput, updateBlogInput } from '@anuragkumar86/medium-commons/dist/zod'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate"
import { Hono } from "hono"
import { verify } from "hono/jwt"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>()

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {


        const user = await verify(authHeader, c.env.JWT_SECRET)

        if (user) {
            c.set("userId", user.id as string);



            await next()
        }
        else {
            c.status(411)
            return c.json({
                msg: "Authantication Failed"
            })
        }
    } catch (e) {
        c.status(411)
        return c.json({
            msg: "Authantication Failed Please verify"
        })
    }
})


blogRouter.post('/', async (c) => {
    const authorId = c.get("userId") as string;
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body)
        if (!success) {
            c.status(411)
            return c.json({
                msg: "Incorrect inputs type"
            })
        }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: parseInt(authorId)
        },
        include: {
            author: true  // Fetch author details immediately
        }
    })
    return c.json({
        id: blog.id,
        author: blog.author?.name || "Anonymous"
    })
})



blogRouter.put('/', async (c) => {
    const body = await c.req.json();
     const { success } = updateBlogInput.safeParse(body)
        if (!success) {
            c.status(411)
            return c.json({
                msg: "Incorrect inputs type"
            })
        }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id: blog.id,
    })
})


blogRouter.get('/bulk', async (c) => {
    // const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'  // Sorting in descending order to get the latest blog first
        },
        select :{
            content: true,
            title: true,
            id: true,
            createdAt: true,
            author: {
                select:{
                    name: true
                }
            }
        }
    })

    return c.json({
        blogs
    })

})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.findFirst({
        where: {
            id: Number(id),
        },
        select:{
            title: true,
            content: true,
            id : true,
            createdAt: true,
            author:{
                select:{
                    name: true, 
                }
            }
        }
    })
    return c.json({
        blog
    })

})

