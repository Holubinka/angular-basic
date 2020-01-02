import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Model {

  private _totalRecords;
  private _recordsPerPage;

  get totalRecords() {
    return this._totalRecords;
  }

  set totalRecords(value) {
    this._totalRecords = value;
  }

  get recordsPerPage() {
    return this._recordsPerPage;
  }

  set recordsPerPage(value) {
    this._recordsPerPage = value;
  }

  getPageCount( currentPage: number = 1) {
    const totalPages = Math.ceil(this._totalRecords / this._recordsPerPage);

    let startPage: number;
    let endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // create an array of pages to ng-repeat in the pager control
    const pageArray: number [] = [];

    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(i);
    }
    // return object with all pager properties required by the view
    return {
      pageArray,
      totalPages
    };
  }
}
