import { prisma } from "../../utils/prisma.ts";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ProductRequest) {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        banner,
        category_id,
      },
    });

    return product;
  }
}
