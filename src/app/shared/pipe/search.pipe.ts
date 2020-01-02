import {Pipe, PipeTransform, ViewChild} from '@angular/core';
import {Post} from '../dal/post/models';
import {PaginationComponent} from '../../modules/home/modules/pagination/pagination.component';
import {HomePageComponent} from '../../modules/home/pages/home-page/home-page.component';

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
  @ViewChild(HomePageComponent, {static: true}) paginator: HomePageComponent;

  transform(posts: Post[], search = ''): Post[] {
    if (!search.trim()) {
      return posts;
    }

    this.paginator.displayActivePage(1);
    return posts.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
