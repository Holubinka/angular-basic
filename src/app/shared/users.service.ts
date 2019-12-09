import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Author> {
    return this.http.get<Author>(`${environment.fbDbUrl}/users/${id}`)
      .pipe(map((user: Author) => {
        return {
          ...user, id,
        };
      }));
  }

}
