import {Component, Input, OnInit} from '@angular/core';
import {Comments} from '../shared/interfaces';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit {

  @Input() comments: Comments;

  constructor(
  ) { }

  ngOnInit() {
  }

}
