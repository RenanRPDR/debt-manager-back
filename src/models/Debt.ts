import { uuid } from 'uuidv4';
import User from './User';

class Debt {
  id: string;

  user: User;
  // adicionar um nome melhor para razao da divida
  debtName: string;

  value: number;

  created_at: Date;

  updated_at: Date;

  constructor({
    user,
    debtName,
    value,
    created_at,
    updated_at
  }: Omit<Debt, 'id'>) {
    this.id = uuid();
    this.user = user;
    this.debtName = debtName;
    this.value = value;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default Debt;
