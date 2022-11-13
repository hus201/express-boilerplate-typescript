import { Request,Response, Router } from "express";
import { TestService } from "../Services/TestService";
import { BaseController } from "./BaseController";

export class TestController extends BaseController{
    public static instance =new this();
    private constructor() {
        super('Test')
        this.router.get('/',this.getFive);
    }
    public getFive(req:Request,res:Response) {
        const service = new TestService();
        const fiveInstances =service.GenerateFiveRandomTestObjects();
        res.status(200).send(fiveInstances);
    }
}