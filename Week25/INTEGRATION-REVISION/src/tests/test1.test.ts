
import { describe, it, expect, beforeAll, beforeEach} from "vitest"
import { app } from "../index"
import request from "supertest"
import { clearDb } from "../db/clearDB"




describe("Testing SUM api", () => {
    beforeAll( async() =>{
        console.log("CLEARING DATABASE...");
        await clearDb(); 
    })

    it("The sum of 2 and 5 must be 7", async() => {

        const res = await request(app).post("/sum").send({
            a: 12,
            b: 5
        })

        expect(res.body.answer).toBe(17);
        expect(res.statusCode).toBe(200);
    })
    
    it("The sum of 0 and 0 must be 0", async() => {
        const res = await request(app).post("/sum").send({
            a: 0,
            b: 0
        })
        
        expect(res.body.answer).toBe(0);
        expect(res.statusCode).toBe(200);
    })

    it("Larger number not allowed on my app", async() => {
        const res = await request(app).post("/sum").send({
            a: 1000000,
            b: 1000000
        })
        
        expect(res.body.message).toBe("Large numbers not allowed");
        expect(res.statusCode).toBe(422);
    })
    
})


describe("Testing PRODUCT api", () => {
    it("The product of 2 and 5 must be 10", async() => {
        const res = await request(app).post("/product").send({
            a: 2,
            b: 5
        })

        expect(res.body.answer).toBe(10);
        expect(res.statusCode).toBe(200);
    })
    
    it("The product of 0 and 0 must be 0", async() => {
        const res = await request(app).post("/product").send({
            a: 0,
            b: 0
        })
        
        expect(res.body.answer).toBe(0);
        expect(res.statusCode).toBe(200);
    })

    it("Larger number not allowed on my app", async() => {
        const res = await request(app).post("/product").send({
            a: 1000000,
            b: 1000000
        })
        
        expect(res.body.message).toBe("Large numbers not allowed");
        expect(res.statusCode).toBe(422);
    })
    
})