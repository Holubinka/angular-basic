import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {Author} from '../../shared/dal/author/models';
import {AuthorService} from '../../shared/dal/author/authorr.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {

  author: Author;

  constructor(private route: ActivatedRoute,
              private userService: AuthorService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.userService.getById(params.id);
      })).subscribe( data => {
        this.author = data;
    });
  }

}
