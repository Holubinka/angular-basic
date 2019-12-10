import {Component, Input, OnInit} from '@angular/core';
import {Comments} from '../shared/interfaces';
import {CommentsService} from '../shared/comments.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit {

  @Input() commentsId: number;
  comments: Comments[] = [];

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.commentsService.getById(this.commentsId)
      .subscribe(data => {
        this.comments = data;
      });
  }

}
