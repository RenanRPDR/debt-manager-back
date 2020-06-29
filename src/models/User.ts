class User {
  id: string;

  title: string;

  constructor ({ id, title}: Omit<User, 'id'>) {
    this.id = id;
    this.title = title
  }
}

export default User;
