import { Router } from "express";
import { ResourceController } from "../controllers/resource_controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class ResourceRoutes{

   static get routes(): Router{
 
    const router= Router();

     const controller=new ResourceController()
     router.post('/profile',AuthMiddleware.validateJWT,controller.profile,);

     return router;
   }  


  

}