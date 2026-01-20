import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { string } from 'zod';
import { sign } from 'hono/jwt';
import { signupInput, signinInput } from '@anuragkumar86/medium-commons/dist/zod';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }

}>();


userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body)
    if (!success) {
        c.status(411)
        return c.json({
            msg: "Incorrect inputs type"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {

        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password

            },

        })
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)

        return c.json({ jwt })
    } catch (e) {
        c.status(411)
        return c.json({
            msg: "Invalid"
        })
    }

})



userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body)
    if (!success) {
        c.status(411)
        return c.json({
            msg: "Incorrect inputs type"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password

            },
        })
        if (!user) {
            c.status(403);
            return c.json({
                msg: "user not exists"
            })
        }
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)

        return c.json({ jwt })
    } catch (e) {
        c.status(403)
        return c.json({
            msg: "User not found"
        })
    }


})
