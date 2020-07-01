import { Router } from 'express';
import debtsRouter from './debt.routes';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/debts', debtsRouter);
routes.use('/users', usersRouter);


export default routes;
