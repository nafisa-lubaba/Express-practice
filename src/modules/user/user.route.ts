import { Router, type Request, type Response } from "express";
import { pool } from "../../db";

 const router = Router();

 router.post("/", async (req: Request, res: Response) => {
   // console.log(req.body)
   const { name, email, password, age } = req.body;
 
   const result = await pool.query(`
         INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *`,[name, email, password, age])
         console.log(result)
 
 
   res.status(200).json({
     "message": "user created successfully",
     "data": result.rows[0],
   })
 
 
 
 
 })

 export const userRoute = router

