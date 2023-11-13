import { Router } from "express";
import { CreatePostController } from "../posts/create/create-posts-controller";

export const postsRoutes = Router();

const createPostController = new CreatePostController();

postsRoutes.post("/", createPostController.handle);
