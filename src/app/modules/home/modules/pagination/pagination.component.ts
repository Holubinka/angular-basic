import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {PaginateService} from '../../../../shared/dal/pagination/paginate.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() totalRecords = 0;
  @Input() recordsPerPage = 10;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  public pages: any = {};
  activePage = 1;

  constructor(
    private pagerService: PaginateService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => this.setPage(1));
  }

  setPage(page: number) {
    this.activePage = page;
    this.pages = this.pagerService.getPageCount(this.totalRecords, this.activePage, this.recordsPerPage);

    if (page < 1 || page > this.pages.totalPages) {
      return;
    }

    this.onPageChange.emit(this.activePage);
  }
}
