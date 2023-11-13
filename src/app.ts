import express from 'express';
import { router } from './http/controllers/routes';
import { errorHandler } from './usecases/errors/ErrorHandler';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(errorHandler);
