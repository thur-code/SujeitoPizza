import { prisma } from "../../utils/prisma.ts";

interface CategoryRequest {
  name: string;
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === "") throw new Error("Nome inválido");

    const category = await prisma.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
