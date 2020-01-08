import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Comments} from '../../shared/dal/comment/models';
import {CommentService} from '../../shared/dal/comment/comment.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit {
  @Input() commentsId: number;

  comments: Comments[] = [];

  constructor(
    private commentsService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.commentsService.getById(params.id);
      })).subscribe(data => {
        this.comments = data;
    });
  }
}
