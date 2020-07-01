import User from '../models/User';

class ConsultUserService {
  private consultUserInApi: User;

  constructor(consultUserInApi: User) {
    this.consultUserInApi = consultUserInApi;
  }


}

// Esse servico devera consutlar os usuarios na API JSON cada vez que o nosso frontend precisar dessa informação

// Consultar e trazer todos o susuarios de uma vez

// Consultar somente um usuario por vez com seu ID
