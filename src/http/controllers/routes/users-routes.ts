import { Router } from "express";
import { CreateUserController } from "../users/create/create-users-controller";
import { FindUserController } from "../users/find-by-id/find-by-id-users-controller";
import { UpdateUserController } from "../users/update-by-id/update-users-controller";
import { DeleteUserController } from "../users/delete-by-id/delete-by-id-users-controller";
import { ListUserController } from "../users/list/list-users-controller";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserController();
const listUsersController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", findUserByIdController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.put("/", updateUserController.handle);
usersRoutes.delete("/:id", deleteUserController.handle);