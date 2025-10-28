import type {Request, Response} from "express";
import {validateLogin, validateRegister} from "./auth.validator";
import {AuthService} from "./auth.service";

interface AuthControllerInterface {
    login: (req: Request, res: Response) => Promise<void>
    register: (req: Request, res: Response) => Promise<void>
}

export class AuthController implements AuthControllerInterface {
    constructor(private authService: AuthService) {}

    login = async (req: Request, res: Response) => {
        try {
            const body = validateLogin(req.body)
            const data = await this.authService.login(body)
            res.status(200).json({
                id: data._id,
                email: data.email,
                name: data?.name,
            })
        }
        catch (error: Error | string | unknown) {
            if (typeof error === 'string') { // validation error
                res.status(400).json({ message: error })
            }
            if (error instanceof Error) {
                res.status(400).json({ message: error.message })
            }
            else {
                res.status(400).json({ message: 'Invalid credentials' })
            }
        }
    }

    register = async (req: Request, res: Response) => {
        try {
            const body = validateRegister(req.body)
            const data = await this.authService.register(body)
            res.status(200).json({
                id: data._id,
                email: data.email,
                name: data?.name,
            })
        }
        catch (error: Error | string | unknown) {
            if (typeof error === 'string') { // validation error
                res.status(400).json({ message: error })
            }
            if (error instanceof Error) {
                res.status(400).json({ message: error.message })
            }
            else {
                res.status(400).json({ message: 'Invalid credentials' })
            }
        }
    }
}