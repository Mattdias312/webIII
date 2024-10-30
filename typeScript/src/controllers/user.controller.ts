import { Request,Response } from "express"
import { IUser } from "./user.interface"


export const getUser = (_req: Request, res: Response) => {
    const user: IUser = {
        id:1,
        name: "João",
        age: 18
    }
    res.json(user)
}