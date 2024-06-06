import express from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { authmiddleware } from "./middleware/authMiddleware.js";
const app = express();
app.use(express.json());

// var jwt = require("jsonwebtoken");
 const tokenKey="salam123"

const users = [
  {
    id: 24,
    email: "meryem",
    password: "mrym",
    role: "Admin",
  },
];
app.get("/users",authmiddleware(["User","Admin"]), (req, res) => {
    try {
      res.send(users)
    } catch (error) {
       return res.status(401).json({ message: error });
    }
  res.send(users);
});

// app.get("/users", (req, res) => {
//     try {
//         const token = req.headers.authorization
//         const accesseded=["User","Admin"]
//         if (!token) {
//             return res.status(401).json({ message: "unauthorization" });
//         }
//         var decoded= jwt.verify(token, tokenKey)
//         console.log(decoded)
//         if (!accesseded.includes(decoded.role)) {
//           return res.status(401).json({ message: "u dont have access" });
//         }
//     } catch (error) {
//         res.status(400).json({ message: error });
//     }
//   res.send(users);
// });
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExit = users.find((x) => x.email === email);
    
    if (!isUserExit) {
      return res.status(404).json({ message: "email is not defined" });
    }
    if (isUserExit.password !== password) {
      return res.status(401).json({ message: "password is wrong" });
    }
   
    var token = jwt.sign({ id: isUserExit.id, email:isUserExit.email,role:isUserExit.role }, tokenKey,{ expiresIn: '1h' });
    res.status(200).json({token});
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const isUserExit = users.find((x) => x.email === email);
  if (isUserExit) {
    return res.status(400).json({ message: "email is already used" });
  }
  users.push({
    id: uuidv4(),
    email,
    password,
    role: "User",
  });
  res.send("user created");
});
// app.delete("/users", (req, res) => {
//   try {
//       const token = req.headers.authorization
//       const accesseded=["Admin"]
//       if (!token) {
//           return res.status(401).json({ message: "unauthorization" });
//       }
//       var decoded= jwt.verify(token, tokenKey)
//       console.log(decoded)
//       if (!accesseded.includes(decoded.role)) {
//         return res.status(401).json({ message: "u dont have access" });
//       }
//   } catch (error) {
//       res.status(400).json({ message: error });
//   }
// res.send("user silindi");
// });
app.delete("/users",authmiddleware(["Admin"]), (req, res) => {
  try {
    res.send("user silindi")
  } catch (error) {
    return  res.status(401).json({ message: error });
    console.log(error);
  }
res.send("user silindi");
});




app.listen(3000);
