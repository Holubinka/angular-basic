import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { locales } from 'src/app/shared/dal/locale/models';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  locales = [];
  currentUrl = '';
  selectedValue: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.locales = locales;
    this.selectedValue = location.pathname.split('/')[1];
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }

  onChange(event: string) {
    window.location.href = 'http://' + location.host + '/' + event.toLowerCase() + this.currentUrl;
  }
}
