class User {
  id: string;

  name: string;

  constructor ({ id, name}: Omit<User, 'id'>) {
    this.id = id;
    this.name = name;
  }
}

export default User;
