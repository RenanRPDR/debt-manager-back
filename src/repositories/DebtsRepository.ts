import Debt from '../models/Debt'
import User from '../models/User'

interface CreateDebtDTO {
  user: User;
  title: string;
  value: number;
  created_at: Date;
  updated_at: Date;
}

class DebtsRepository {
  private debts: Debt[];

  constructor() {
    this.debts = [];
  }

  public all(): Debt[] {
    return this.debts;
  }

  public create({
     user,
     title,
     value,
     created_at,
     updated_at }: CreateDebtDTO): Debt {
      const debt = new Debt({
        user,
        title,
        value,
        created_at,
        updated_at
      });

      this.debts.push(debt);

      return debt;
    }
  }

export default DebtsRepository;
