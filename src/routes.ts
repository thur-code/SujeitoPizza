import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/multer.ts";

import { CreateUserController } from "./controllers/user/CreateUserController.ts";
import { AuthUserController } from "./controllers/user/AuthUserController.ts";
import { DetailUserController } from "./controllers/user/DetailUserController.ts";
import { isAuthenticated } from "./middlewares/isAuthenticated.ts";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController.ts";
import { ListCategoryController } from "./controllers/category/ListCategoryController.ts";
import { CreateProductController } from "./controllers/product/CreateProductController.ts";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController.ts";
import { CreateOrderController } from "./controllers/order/CreateOrderController.ts";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController.ts";
import { AddItemController } from "./controllers/order/AddItemController.ts";
import { RemoveItemController } from "./controllers/order/RemoveItemController.ts";
import { SendOrderController } from "./controllers/order/SendOrderController.ts";
import { ListOrdersController } from "./controllers/order/ListOrdersController.ts";
import { DetailOrderController } from "./controllers/order/DetailOrderContoller.ts";
import { FinishOrderController } from "./controllers/order/FinishOrderController.ts";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas User
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

// Rotas Category
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// Rotas Product
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

// Rotas Order
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);
router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrdersController().handle);
router.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);
router.put("/order/finish", isAuthenticated, new FinishOrderController().handle);

export { router };
