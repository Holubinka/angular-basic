import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  locales = [
    {
      code: 'en',
      text: 'English',
    },
    {
      code: 'uk',
      text: 'Українська',
    }
  ];
  currentUrl = '';
  constructor(private router: Router,
              @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = this.router.url;
      });
  }
}
