import {Component, Input, OnInit} from '@angular/core';
import {Author, Comments, Post} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../shared/posts.service';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {UsersService} from '../shared/users.service';
import {CommentsService} from '../shared/comments.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  posts$: Observable<Post>;
  user: Observable<Author>;
  comments: Comments[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private usersService: UsersService,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      })).subscribe(data => {
        this.posts$ = of(data);
        this.user =  this.usersService.getById(data.id);
        console.log('id', data.id);
        this.commentsService.getById(data.id).subscribe( data => {
          this.comments = data;
        });
      });
  }

}
