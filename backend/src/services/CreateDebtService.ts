import DebtsRepository from '../repositories/DebtsRepository';
import Debt from '../models/Debt';
import User from '../models/User';

interface Request {
  user: User;
  debtName: string;
  value: number;
  created_at: Date;
  updated_at: Date;
}

class CreateDebtService {
  private debtsRepository: DebtsRepository;

  constructor(debtsRepository: DebtsRepository) {
    this.debtsRepository = debtsRepository;
  }

  public execute({
    user,
    debtName,
    value,
    created_at,
    updated_at
   }: Request): Debt {
    const debt = this.debtsRepository.create({
      user,
      debtName,
      value,
      created_at,
      updated_at
    });
    return debt;
  }
}

export default CreateDebtService;
