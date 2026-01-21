import { prisma } from "./prisma"

export const clearDb = async() =>{
    await prisma.calculator.deleteMany({});
}