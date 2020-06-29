import { uuid } from 'uuidv4';

class Debt {
  id: string;

  user_id: string;

  title: string;

  value: number;

  created_at: Date;

  updated_at: Date;

  constructor({
    user_id,
    title,
    value,
    created_at,
    updated_at
  }: Omit<Debt, 'id'>) {
    this.id = uuid();
    this.user_id = user_id;
    this.title = title;
    this.value = value;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default Debt;
