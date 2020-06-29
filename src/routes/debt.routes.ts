import { Router } from 'express';
import DebtsRepository from '../repositories/DebtsRepository';
import CreateDebtService from '../services/CreateDebtService';

const debtRouter = Router();
const debtsRepository = new DebtsRepository();

debtRouter.get('/', (request, response) => {
  try {
    const debts = debtsRepository.all();

    return response.json({
      debts,
    });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

debtRouter.post('/', (request, response) => {
  try {
    const {
      user_id,
      title,
      value,
      created_at,
      updated_at
    } = request.body;

    const createDebt = new CreateDebtService(
      debtsRepository,
    );

    const debt = createDebt.execute({
      user_id,
      title,
      value,
      created_at,
      updated_at });

      return response.json(debt);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default debtRouter;


