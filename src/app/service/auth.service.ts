import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserLogin } from './../model/UserLogin';
import { User } from './../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://backendblogpessoal.herokuapp.com/usuarios/logar', userLogin)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://backendblogpessoal.herokuapp.com/usuarios/${id}`)
  }

  // Deve usar o link do Back Local ou hospedado
  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://backendblogpessoal.herokuapp.com/usuarios/cadastrar', user)
  }

  isLogged(){
    let logged = false                          // let ok = false
    if(environment.token != '') logged = true   // let ok = true
    return logged                               // return ok
  }

  isAdmin(){
    let admin = false                             // let ok = false
    if(environment.tipo == 'admin') admin = true  // let ok = true
    return admin                                  // return ok
  }
}
