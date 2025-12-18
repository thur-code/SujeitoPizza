import type { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService.ts";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { first_name, last_name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      first_name,
      last_name,
      email,
      password,
    });

    return res.json(user);
  }
}
