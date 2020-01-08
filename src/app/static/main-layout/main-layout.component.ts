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
      code: 'ua',
      text: 'Українська',
    }
  ];
  currentUrl = '';
  selectedValue: string;

  constructor(private router: Router,
              @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit() {
    this.selectedValue = location.pathname.split('/')[1];
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }

  onChange(event: Event) {
    console.log(event);
    console.log(window.location);
    //window.location.href = '/' + this.currentUrl;
  }
}
