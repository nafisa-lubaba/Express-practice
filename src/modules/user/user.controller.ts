import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.services";

const createUser = async (req: Request
    , res: Response) => {
//   //   console.log(req.body);
//     const { name, email, password, age } = req.body;

  try {
    const result = await userService.createUserIntoDB(req.body);
            // console.log(result)
    
    
      res.status(200).json({
        "message": "user created successfully",
        "data": result.rows[0],
      });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};


export const userController = {
  createUser,
}