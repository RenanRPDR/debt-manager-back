import Debt from '../models/Debt'
import User from '../models/User'

interface DTO {
  id: string;
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

  public findById(id: string): Debt {

    const result = this.debts.filter(debt => debt.id === id);

    if (!result[0]) {
      return null;
    }

    return result[0];
  }

  public create({
     user,
     debtName,
     value,
     created_at,
     updated_at }: any): Debt {
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

  public update(
    id: string,
    user: User,
    debtName: string,
    value: number,
    updated_at: Date,
   ): Debt {

    const debt = this.findById(id);

    if (debt) {
      debt.user = user;
      debt.debtName = debtName;
      debt.value = value;
      debt.updated_at = updated_at;
    }

    return debt;
    }

  public delete(id: string): any {
    for (const debtIndex in this.debts) {
      if (this.debts[debtIndex].id == id) {
        delete this.debts[debtIndex]
      }
    }
  }
}


export default DebtsRepository;
