import {Component,  OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {locales} from '../../shared/dal/locale/models';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  locales = [];
  selectedValue: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.locales = locales;
    this.selectedValue = this.locales.filter((language) => {
      return language.code ===  location.pathname.split('/')[1];
    }).pop();
  }

  onChange(event: string) {
    location.href = '/' + `${event + this.router.url}`;
  }
}
