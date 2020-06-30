import { Router } from 'express';
import debtsRouter from './debt.routes';

const routes = Router();

routes.use('/debts', debtsRouter);

export default routes;
