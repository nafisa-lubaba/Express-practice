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

const getAllUsers = async (req: Request, res: Response) => {
   try {
    const result = await userService.getAllUsersFromDB();
     res.status(200).json({
       success: true,
       message: "Users retrived successfully!",
       data: result.rows,
     });
   } catch (error: any) {
     res.status(500).json({
       success: false,
       message: error.message,
       error: error,
     });
   }
 }
const getUserById = async (req: Request, res: Response) => {
   const { id } = req.params;
   try {
      const result = await userService.getUserByIdFromDB(id as string);
 
     if (result.rows.length === 0) {
       res.status(404).json({
         success: false,
         message: "User Not found!",
         data: {},
       });
     }
 
     res.status(200).json({
       success: true,
       message: "User retrived successfully!",
       data: result.rows[0],
     });
   } catch (error: any) {
     res.status(500).json({
       success: false,
       message: error.message,
       error: error,
     });
   }
 }
 const updateUser = async (req: Request, res: Response) => {
};
const deleteUser = async (req: Request, res: Response) => {
};

export const userController = {
  createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}