import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginateService {
  getPageCount(totalItems: number, currentPage: number = 1, pageSize: number = 10) {

    const totalPages = Math.ceil(totalItems / pageSize);
    const pageArray: number [] = [];

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

    for (let i = startPage ; i <= endPage; i++) {
      pageArray.push(i);
    }

    return {
      pageArray,
      totalPages
    };
  }
}
