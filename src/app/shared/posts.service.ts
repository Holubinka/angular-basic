import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Post} from './interfaces';
import {environment} from '../../environments/environment';
import {delay, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {

  posts: Post[] = [];
  active = true;

  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.fbDbUrl}/posts`, post)
      .pipe(map((post1: Post) => {
        return {
          ...post1,
          id: this.posts.length + 1
        };
      }));
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.fbDbUrl}/posts`)
      .pipe(delay(500));
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.fbDbUrl}/posts/${id}`)
      .pipe(map((post: Post) => {
        return {
          ...post, id,
        };
      }));
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}`);
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.fbDbUrl}/posts/${post.id}`, post);
  }
}
