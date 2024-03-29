import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { postsRoutes } from "./posts-routes";

export const router = Router();

router.use("/users", usersRoutes);
router.use("/posts", postsRoutes);