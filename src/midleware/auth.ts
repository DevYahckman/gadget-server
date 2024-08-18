import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';

function auth(req:any,res:Response,next:NextFunction){
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).send('Access denied, no token')

    try {
        const decode = jwt.verify(token,'12345')
        req.user = decode
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}

export default auth;