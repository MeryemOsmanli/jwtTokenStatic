import jwt from "jsonwebtoken";
const tokenKey="salam123"

export const authmiddleware = (role) => {
    return (req, res, next)=>{
        try {

            let token = req.headers.authorization
            // const accesseded = ["User", "Admin"]
            if (!token || !token.startsWith("Bearer")) {
                return res.status(401).json({ message: "unauthorization" });
            }
            token = token.slice(7)
            let decoded = jwt.verify(token, tokenKey)
            console.log(decoded)
            if (!role.includes(decoded.role)) {
                return res.status(401).json({ message: "u dont have access" });
            }
            req.esed=decoded
            next()
        } catch (error) {
            res.status(400).json({ message: error });
            console.log(error)


        }
    }
}