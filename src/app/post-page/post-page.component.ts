import {Component, Input, OnInit} from '@angular/core';
import {Post, Users} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  posts$: Observable<Post>;
  user: Users;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.posts$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      }));
    this.posts$.subscribe(post => {
      this.usersService.getById(post.userId).subscribe(user =>
      this.user = user);
    });

  }

}
