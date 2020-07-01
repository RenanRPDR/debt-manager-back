import { Router, response } from 'express';
import DebtsRepository from '../repositories/DebtsRepository';
import CreateDebtService from '../services/CreateDebtService';

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

/** Listar todas as dividas de um cliente */
debtsRouter.get('/:id', (request, response) => {
  try {
    // coding ...
    return response.json();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

/** Obter detalhes de uma divida */
debtsRouter.get('/:id', (request, response) => {
  try {
    const selectOneDebt = debtsRepository;

    return response.json(selectOneDebt);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

/*  Criar uma divida:
Está faltando adicionar o id e nome de usuario vindo da API externa */

debtsRouter.post('/', (request, response) => {
  try {
    const {
      user,
      debtName,
      value,
      created_at,
      updated_at
    } = request.body;

    const createDebt = new CreateDebtService(debtsRepository);

      const debt = createDebt.execute({
        user,
        debtName,
        value,
        created_at,
        updated_at });

        return response.json(debt);
      } catch (err) {
        return response.status(400).json({ error: err.message });
      }
    });

/** Editar uma divida */
// Consegui validar o ID mais nao estou conseguindo
// trazer o debito existente para alteralo
debtsRouter.put('/:id', (request, response) => {
  try {
    const { id } = request.params
    const debt = debtsRepository.findById(id)

    if ( debt < 0) {
      return response.status(400).json({ error: 'Debt does not exist'})
    }

    return response.json(debt);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

/** Deletar uma divida */
debtsRouter.delete('/:id', (request, response) => {
  try {
    // coding ...
    return response.json();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default debtsRouter;


