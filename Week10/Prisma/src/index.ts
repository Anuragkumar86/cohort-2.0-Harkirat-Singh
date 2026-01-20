import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string , password : string, firstname: string, lastname: string){

    const res = await prisma.user.create({
        data :{
            email,
            password,
            firstname,
            lastname
        },
        select :{
            id : true,
            password: true,
            firstname: true
        }
    })
    console.log(res);
}

insertUser("ansh@gmail.com", "ansh123", "Ansh", "Pandey");
