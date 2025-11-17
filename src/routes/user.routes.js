import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.ctrl.js";

const userRoutes = Router();

userRoutes.get("/",  async(req,res)=>{
    const usersDB = await getUsers();
    res.status(200).json({data:usersDB})
});
userRoutes.post("/", createUser);

export default userRoutes;
