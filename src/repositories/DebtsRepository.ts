import Debt from '../models/Debt'
import User from '../models/User'

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
     date
    }: any): Debt {
      const debt = new Debt({
        user,
        debtName,
        value,
        date
      });

      this.debts.push(debt);

      return debt;
    }

  public update(
    id: string,
    user: User,
    debtName: string,
    value: number,
    date: Date,
   ): Debt {

    const debt = this.findById(id);

    if (debt) {
      debt.user = user;
      debt.debtName = debtName;
      debt.value = value;
      debt.date = date;
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
