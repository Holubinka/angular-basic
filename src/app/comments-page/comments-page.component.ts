import {Component, Input, OnInit} from '@angular/core';
import {Comments} from '../shared/interfaces';
import {CommentsService} from '../shared/comments.service';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit {

  @Input() commentsId: number;
  comments: Comments[] = [];

  constructor(
    private commentsService: CommentsService,
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
