import { uuid } from 'uuidv4';
import User from './User';

class Debt {
  id: string;

  user: User;

  debtName: string;

  value: number;

  date: Date;

  constructor({
    user,
    debtName,
    value,
    date
  }: Omit<Debt, 'id'>) {
    this.id = uuid();
    this.user = user;
    this.debtName = debtName;
    this.value = value;
    this.date = date;
  }
}

export default Debt;
