import express, { json, raw } from "express";
import logger from './Logger/logger';
import { mainRouter } from "./Routers/Router";
import {createServer } from 'http';
async function Main() {
    const app = express();
    app.use(json(),raw(),mainRouter);
    app.set('logger',logger);
    app.listen(3000,()=>{
    logger.info("Server Started At http://localhost:3000");
    })
    
}
Main();