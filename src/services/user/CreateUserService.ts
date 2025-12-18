import { hashPassword } from "../../utils/password.ts";
import { prisma } from "../../utils/prisma.ts";

interface UserRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ first_name, last_name, email, password }: UserRequest) {
    if (
      typeof first_name !== "string" ||
      typeof last_name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      throw new Error("Dados incorretos");
    }

    if (!first_name || !last_name || !email || !password) {
      throw new Error("Preencha todos os campos");
    }

    const userAlreadyExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error("E-mail já cadastrado");
    }

    const hashed = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        password: hashed,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        created_at: true,
      },
    });

    return user;
  }
}
