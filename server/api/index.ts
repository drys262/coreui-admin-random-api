import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.json({ message: "Hello guys. Welcome to Vercel" });
};