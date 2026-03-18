import express, { Request, Response } from "express";
import { authMiddleware } from "./middleware/authMiddleware";
import { createUserSchema, signinSchema, createRoomSchema } from "@repo/common/types";

const app = express();
const PORT = 5000;
// Pending
app.post("/signup", (req: Request, res: Response) => {
    const data = createUserSchema.safeParse(req.body);
    if (!data.success) {
        return res.json({ message: "Invalid inputs" })
    }
    const { username, password } = req.body;
    // db call

    return res.status(200).json({})

})

app.post("/signin", (req: Request, res: Response) => {
    // check db
    // jwt sign
    //  return token
})

app.post("/create-room", authMiddleware, (req: Request, res: Response) => {
    // 
})

app.listen(PORT, () => console.log(`http-server running on port ${PORT}`))