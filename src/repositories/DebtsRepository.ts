import Debt from '../models/Debt'
import User from '../models/User'

interface Request {
  user: User;
  debtName: string;
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

  public findById(id: string) {

    const debtIndex = this.debts.findIndex(debts => debts.id === id);

    // coding ...

    return debtIndex;
  }

  public create({
     user,
     debtName,
     value,
     created_at,
     updated_at }: Request): Debt {
      const debt = new Debt({
        user,
        debtName,
        value,
        created_at,
        updated_at
      });

      this.debts.push(debt);

      return debt;
    }
  }

export default DebtsRepository;
