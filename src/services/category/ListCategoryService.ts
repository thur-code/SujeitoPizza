import { prisma } from "../../utils/prisma.ts";

export class ListCategoryService {
  async execute() {
    const category = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
