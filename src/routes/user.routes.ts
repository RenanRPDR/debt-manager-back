import { Router } from 'express';
import UserApi from '../models/UserApi';


const usersRouter = Router();
const userApi = new UserApi();

// VERIFICAR !
usersRouter.get('/', async (request, response) => {

  const result = await userApi.listAll()

  return response.json(result);
    }
  );

usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params

  const result = await userApi.byId(id)

  return response.json(result);
    }
  );

export default usersRouter;




