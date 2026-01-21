import express from "express"
import { prisma } from "./db/prisma.js";

export const app = express();
app.use(express.json());

app.post("/sum", async (req, res) => {
    try {
        const { a, b } = req.body;

        if (a > 100000 || b > 100000) {
            res.status(422).json({ message: "Large numbers not allowed" });
            return
        }

        const result = a + b;

        const calc =  await prisma.calculator.create({
            data: { a, b, result, operation: "ADD" },
        });

        res.status(200).json({ answer: result, id: calc.id });
        return

    } catch (error) {
        console.error("Prisma error:", error);
        res.status(500).json({
            message: "Internal server error",
        });
        return;
    }
});




app.post("/product", async (req, res) => {
    const { a, b } = req.body;

    try {


        if (a > 100000 || b > 100000) {
            res.status(422).json({
                message: "Large numbers not allowed",
            });
            return
        }

        const result = a * b;

        await prisma.calculator.create({
            data: {
                a,
                b,
                result,
                operation: "MUL",
            },
        });

        res.status(200).json({
            answer: result,
        });
        return
    }
    catch (error) {
        console.error("Prisma error:", error);
        res.status(500).json({
            message: "Internal server error",
        });
        return
    }


});
