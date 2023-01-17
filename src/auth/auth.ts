
import jwt from 'jsonwebtoken';
import { Request, Response,NextFunction} from 'express'

export class UserAuth {
  
    generateToken(email: string) {
        return jwt.sign({ email: email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_TIME });
    }

    authenticateToken(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        
        if (token == null) return res.sendStatus(401)
    
        // jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        //     console.log(err)
        //     if (err) return res.sendStatus(403)
        //     next()
        // })
        const data = jwt.verify(token, process.env.TOKEN_SECRET)
        // req['userEmail'] = data.id
        console.log(data)
        next()
    }

}