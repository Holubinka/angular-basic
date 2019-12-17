import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {AlertService} from '../shared/services/alert.service';
import {Router} from '@angular/router';
import {ModalPageComponent} from '../modal-page/modal-page.component';
import {RefDirective} from '../shared/ref.directive';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchStr = '';
  currentPage = 1;
  itemsPerPage = 10;

  @ViewChild(RefDirective, {static: false}) modal: RefDirective;

  constructor(
    public postsService: PostsService,
    private alert: AlertService,
    private router: Router,
    private resolver: ComponentFactoryResolver
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
      this.alert.danger('Пост був видалений');
    });
  }

  open(modalTitle, link) {
      const modalFactory = this.resolver.resolveComponentFactory(ModalPageComponent);
      this.modal.containerRef.clear();
      const component = this.modal.containerRef.createComponent(modalFactory);
      component.instance.title = modalTitle;
      component.instance.openScrollableContent(link);
      component.instance.close.subscribe(() => {
        this.modal.containerRef.clear();
      });
  }

  displayActivePage(activePageNumber: number) {
    this.currentPage = activePageNumber;
  }
}
