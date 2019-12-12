import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {PagerService} from '../shared/services/pager.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalRecords = 0;
  @Input() recordsPerPage = 0;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  public pages: any = {};
  activePage: number;

  constructor(private pagerService: PagerService) {
  }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pages.totalPages) {
      return;
    }
    this.activePage = page;
    this.onPageChange.emit(this.activePage);
    this.pages = this.pagerService.getPageCount(this.totalRecords, this.activePage, this.recordsPerPage);
  }
}
