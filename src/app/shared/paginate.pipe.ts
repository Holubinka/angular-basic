import { Pipe, PipeTransform } from '@angular/core';
import {Post} from './interfaces';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(posts: Post[], currentPage = 1, itemsPerPage = 10): Post[] {

    return posts.slice((itemsPerPage * (currentPage - 1)), (itemsPerPage * currentPage));
  }

}
