import { verifyPassword } from "../../utils/password.ts";
import { prisma } from "../../utils/prisma.ts";
import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

interface AuthRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("E-mail não encontrado");
    }

    const ok = await verifyPassword(user.password, password);

    if (!ok) {
      throw new Error("Senha incorreta");
    }

    const token = await new SignJWT({
      name: `${user.first_name} ${user.last_name}`,
      email: user.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setSubject(user.id)
      .setIssuedAt()
      .setExpirationTime("30d")
      .sign(secret);

    return {
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      email: user.email,
      token: token,
    };
  }
}
