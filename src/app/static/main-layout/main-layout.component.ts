import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  languages = [
    {id: 'ua', name: 'Ua'},
    {id: 'en', name: 'En'}
  ];
  selectedValue = this.languages[0];

  constructor() { }

  ngOnInit() {
  }
}
