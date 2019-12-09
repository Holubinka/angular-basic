import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Comments[]> {
    const params = new HttpParams()
      .set('postId', id.toString());
    return this.http.get<Comments[]>(`${environment.fbDbUrl}/comments`, {params});
  }

}
