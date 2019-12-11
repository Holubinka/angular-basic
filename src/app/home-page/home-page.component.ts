import {Component, OnInit, ViewChild} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {AlertService} from '../shared/services/alert.service';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchStr = '';
  p = 1;
  count = 10;

  @ViewChild(RouterOutlet, {static: false}) modal;

  constructor(
    public postsService: PostsService,
    private alert: AlertService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.postsService.getAll().subscribe(posts => {
      if (this.postsService.active) {
        this.postsService.posts = posts;
        this.postsService.active = false;
      }
    });

  }

  remove(id: number) {
    this.postsService.remove(id).subscribe(() => {
      this.postsService.posts = this.postsService.posts.filter(post => post.id !== id);
      this.alert.warning('Пост был удален');
    });
  }

  open(link) {
    this.router.navigate(['/home/modal']).then(() => {
      this.modal.component.openScrollableContent(link);
    });
  }
}
