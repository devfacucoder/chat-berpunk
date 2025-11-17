import userModel from "../models/user.model.js";

import { customAlphabet } from "nanoid";
const miAlfabeto = "ABCDEF123456";
const generarCodigo = customAlphabet(miAlfabeto, 10); // 10 = longitud

export const getUsers = async () => {
  try {
    const usersData = await userModel.find();
    return usersData;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByNum = async (idNum) => {
  try {
    const user = await userModel.findOne({ idNum });
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const neeUser = new userModel({
      idNum: generarCodigo(),
      nickname: req.body.nickname,
      password: req.body.password,
    });

    const saveUser = await neeUser.save();
    res.status(200).json({ mesage: "usario Creado", data: saveUser });
  } catch (error) {
    console.log(error);
  }
};

export const addContact = async () =>{
  try {
    
  } catch (error) {
    console.log(error);
    
  }
} 


