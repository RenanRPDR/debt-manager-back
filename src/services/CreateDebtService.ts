import DebtsRepository from '../repositories/DebtsRepository';
import Debt from '../models/Debt';

interface Request {
  user_id: string;
  title: string;
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
    user_id,
    title,
    value,
    created_at,
    updated_at
   }: Request): Debt {
    const debt = this.debtsRepository.create({
      user_id,
      title,
      value,
      created_at,
      updated_at
    });
    return debt;
  }
}

export default CreateDebtService;
