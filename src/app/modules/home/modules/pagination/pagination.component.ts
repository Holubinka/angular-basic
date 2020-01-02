import {Component, DoCheck, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Model} from '../../../../shared/dal/pagination/model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  get totalRecords() {
    return this._totalRecords;
  }

  set totalRecords(value) {
    this._totalRecords = value;
  }

  private _totalRecords;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  public pages: any = {};
  activePage: number;

  constructor(private pagerService: Model) {
  }

  ngOnInit(): void {
    this.setPage(1);
  }

  setPage(page: number) {
    this._totalRecords = this.pagerService.totalRecords;
    if (page < 1 || page > this.pages.totalPages) {
      return;
    }
    this.activePage = page;
    this.onPageChange.emit(this.activePage);
    this.pages = this.pagerService.getPageCount(this.activePage);
  }
}
