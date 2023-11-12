import Dosen from "../models/DosenModel.js";

import bcrypt from "bcrypt"
export const getDosens = async (req, res) => {
  try {
    const response = await Dosen.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message)
    res.status(404).json({
      message: "Resources Not Found"
    });
  }
}

export const store = async (req, res) => {
  try {
    const {
      nip,
      nama_dosen,
      email,
      password,
      active,
      foto
    } = req.body;

    const hashedpassword = await bcrypt.hash(password, 10);
    const response = await Dosen.create({
      nip,
      nama_dosen,
      email,
      password: hashedpassword,
      active,
      foto
    });
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message)
    res.status(401).json({
      error: "Resources bad request"
    });
  }
}