import User from './User'
import axios from 'axios'

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users/',
});

class UserApi {

  public async listAll () {

    const request = await http.get('')

    return request.data;
  }

  public async byId (id: string) {
    const request = await http.get(id)

    return request.data;
  }

}

export default UserApi;
