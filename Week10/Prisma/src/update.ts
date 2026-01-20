import { PrismaClient } from "@prisma/client";
import { Interface } from "readline";

const prisma = new PrismaClient();

interface UpdateParams {
    firstname: string;
    lastname: string;

}

async function updateUser(username: string, {
    firstname,
    lastname
}: UpdateParams) {
    const res = await prisma.user.update({
        where: {
            email: username
        },
        data: {
            firstname,
            lastname
        }
    })
    console.log(res);

}
updateUser("anurag@gmail.com" ,{
    firstname : "ANURAG",
    lastname: "YADAV G"
})