import { Router } from "express";

export class BaseController {
    public router :Router;
    public name:string;
    constructor(name:string) {
        this.router = Router();
        this.name=name;
    }
 

}