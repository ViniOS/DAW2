import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../Interfaces/User.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  public sendUser(
    first_name: string,
    last_name: string,
    password: string
  ): Observable<User> {
    const data = { first_name, last_name, password };

    return this.http.post<User>(this.URL, data);
  }

  getUser(): Observable<User[]> {
    return this.http.get<any[]>(this.URL).pipe(
      map(data => {
        return data.map(user => ({
          id: user.Id, 
          first_name: user.first_name, 
          last_name: user.last_name,
          password: user.password
        }));
      })
    );
  }

  // getUser(): Observable<User[]> {
  //   return this.http.get<User[]>(this.URL).pipe(
  //     map(data => data.map(user => ({
  //       id: user.id,
  //       nome: user.nome,
  //       sobrenome: user.sobrenome,
  //       senha: user.senha
  //     })))
  //   );
  // }
}
