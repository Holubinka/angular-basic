import {forwardRef, Inject, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {Post} from '../dal/post/models';
import {Model} from '../dal/pagination/model';

@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginatePipe implements PipeTransform {
  constructor(private comp: Model) {
  }

  transform(posts: Post[], currentPage = 1, itemsPerPage = 10): Post[] {
    const result = posts.slice((itemsPerPage * (currentPage - 1)), (itemsPerPage * currentPage));
    this.comp.totalRecords = posts.length;
    this.comp.recordsPerPage = itemsPerPage;
    return result;
  }

}
