import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Post} from '../../shared/dal/post/models';
import {Author} from '../../shared/dal/author/models';
import {PostService} from '../../shared/dal/post/services';
import {AuthorService} from '../../shared/dal/author/services';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  posts$: Observable<Post>;
  user: Observable<Author>;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private postsService: PostService,
    private usersService: AuthorService,
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      })).subscribe(data => {
        this.posts$ = of(data);
        this.user =  this.usersService.getById(data.id);
      }, error => {
        if (error.status === 404) {
          this.error = error.message;
        }
    });
  }

}
