import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Author} from './models';

@Injectable({providedIn: 'root'})
export class Services {

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
