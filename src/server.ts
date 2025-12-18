import express from "express";
import type { Request, Response, NextFunction } from "express";
import { router } from "./routes.ts";
import cors from "cors";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use("/files", express.static(path.resolve(process.cwd(), "tmp")));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error.",
  });
});

app.listen(3333, () => console.log("Servidor Online!"));
