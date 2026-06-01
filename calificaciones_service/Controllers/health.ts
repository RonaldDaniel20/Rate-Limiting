import { Response, Request } from "express";


const healthCheck = (_req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Calificaciones Service is healthy",
    })
}

export { healthCheck }