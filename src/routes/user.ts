import { Router } from 'express';
import { UserController } from '../controllers/test';
import { Routes } from '../interfaces/routes.interface';
export class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public user = new UserController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/me`, this.user.me);
  }
}

