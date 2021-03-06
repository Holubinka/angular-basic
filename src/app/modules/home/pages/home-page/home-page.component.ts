import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {AlertService} from '../../../../shared/dal/alert/alert.service';
import {Router} from '@angular/router';
import {ModalPageComponent} from '../../../../static/modal-page/modal-page.component';
import {RefDirective} from '../../../../shared/directives/ref.directive';
import {PostService} from '../../../../shared/dal/post/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild(RefDirective, {static: false}) modal: RefDirective;

  searchStr = '';
  currentPage = 1;
  itemsPerPage = 10;

  constructor(
    public postsService: PostService,
    private alert: AlertService,
    private router: Router,
    private resolver: ComponentFactoryResolver
  ) { }

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
      this.alert.danger('Danger');
    });
  }

  openModalPage(modalTitle, link) {
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
