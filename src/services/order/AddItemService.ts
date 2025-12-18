import { prisma } from "../../utils/prisma.ts";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

export class AddItemService {
  async execute({ order_id, product_id, amount }: ItemRequest) {
    const order = await prisma.item.create({
      data: {
        order_id,
        product_id,
        amount,
      },
    });

    return order;
  }
}
