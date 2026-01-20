import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest"
import { app } from "..";
import resetDb from "./helpers/reset-db";


describe("POST/ sum", ()=>{
    beforeAll(async()=>{
        console.log("Clearing DATABASE Before TEST")
        await resetDb()
    })

    it("sum of 5 and 3 should be 8", async()=>{
        const res = await request(app).post("/sum").send({
            a: 5,
            b: 3
        })
        expect(res.body.result).toBe(8);
        expect(res.status).toBe(200)
    })

    it("Numbet should be not very big", async()=>{
        const res = await request(app).post("/sum").send({
            a: 5000000,
            b: 3
        })
        expect(res.body.message).toBe("Sorry we dont support big numbers");
        expect(res.status).toBe(422)
    })
    
})