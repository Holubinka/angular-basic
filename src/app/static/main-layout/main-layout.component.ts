import {Component, OnInit} from '@angular/core';
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
  selectedValue: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.selectedValue = this.locales.filter((language) => {
      return language.code ===  location.pathname.split('/')[1];
    }).pop().text;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }

  onChange(event: any) {
    window.location.href = 'http://' + location.host + '/' + event.target.value + '/' + this.currentUrl;
  }
}
