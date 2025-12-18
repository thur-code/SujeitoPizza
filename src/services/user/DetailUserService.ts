import { prisma } from "../../utils/prisma.ts";

export class DetailUserService {
  async execute(user_id: string) {
    const user = await prisma.user.findUnique({
      where: { id: user_id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
      },
    });

    return user;
  }
}
