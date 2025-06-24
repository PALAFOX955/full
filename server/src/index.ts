import server from "./server";
import { Request, Response, NextFunction } from "express";
const PORT = process.env.PORT || 3000;
server.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
});



