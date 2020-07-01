import { Router } from 'express';
import axios from 'axios';
//import api from '../services/api'

const usersRouter = Router();


// VERIFICAR !
usersRouter.get('/', (request, response) => {
  try {
    const consult = axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(data) {

      return response.json(data);
      }
    );
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;




