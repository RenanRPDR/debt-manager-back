import { Router } from 'express';
import debtRouter from './debt.routes';

const routes = Router();

routes.use('/debts', debtRouter);

export default routes;
