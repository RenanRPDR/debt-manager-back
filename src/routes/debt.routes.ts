import { Router, response } from 'express';
import DebtsRepository from '../repositories/DebtsRepository';

const debtsRouter = Router();
const debtsRepository = new DebtsRepository();

debtsRouter.get('/', (request, response) => {
  try {
    const allDebts = debtsRepository.all();

    return response.json(allDebts);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

debtsRouter.get('/byUser/:id', (request, response) => {
  try {
    const { id } = request.params

    const userDebts = debtsRepository.all();

    const result = userDebts.filter(debt => debt.user.id == id);

    return response.json(result);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

debtsRouter.get('/:id', (request, response) => {
  try {
    const { id } = request.params

    const result = debtsRepository.findById(id);

    return response.json(result);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

debtsRouter.post('/', (request, response) => {
  try {
    const {
      user,
      debtName,
      value,
      date
      } = request.body;


      const debt = debtsRepository.create({
        user,
        debtName,
        value,
        date
      });

        return response.json(debt);
      } catch (err) {
        return response.status(400).json({ error: err.message });
      }
    });

debtsRouter.post('/:id', (request, response) => {
  try {
    const { id } = request.params
    const { user, debtName, value, date } = request.body

    const debt = debtsRepository.update(id, user, debtName, value, date)

    if (!debt) {
      return response.status(400).json({ error: 'Debt does not exist'})
    }

    return response.json(debt);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

debtsRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params

    const debt = debtsRepository.delete(id)
    return response.json({ message: "Deleted"});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default debtsRouter;


