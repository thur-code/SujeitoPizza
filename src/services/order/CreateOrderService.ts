import { prisma } from "../../utils/prisma.ts";

interface OrderRequest {
  table: number;
  name: string;
}

export class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    const orderAlreadyExists = await prisma.order.findFirst({
      where: { table },
    });

    if (orderAlreadyExists) {
      throw new Error("Order já existe");
    }

    const order = await prisma.order.create({
      data: {
        table,
        name,
      },
    });

    return order;
  }
}
