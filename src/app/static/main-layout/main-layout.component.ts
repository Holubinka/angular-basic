import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
  selectedValue: any;

  constructor(private router: Router,
              @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit() {
    this.selectedValue = this.locales.filter((language) => {
      return language.code ===  location.pathname.split('/')[1];
    }).pop();
  }

  onChange(event: string) {
    location.href = '/' + `${event + this.router.url}`;
  }
}
