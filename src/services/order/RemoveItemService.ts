import { prisma } from "../../utils/prisma.ts";

interface ItemRequest {
  item_id: string;
}

export class RemoveItemService {
  async execute({ item_id }: ItemRequest) {
    const order = await prisma.item.delete({
      where: { id: item_id },
    });

    return order;
  }
}
