import type { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { payload } = await jwtVerify<{ sub: string }>(token, secret);
    const sub = payload.sub;

    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
