import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post, Users} from './interfaces';
import {environment} from '../../environments/environment';
import {delay, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Users> {
    return this.http.get<Users>(`${environment.fbDbUrl}/users/${id}`)
      .pipe(map((user: Users) => {
        return {
          ...user, id,
        };
      }));
  }

}
