import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit, AfterViewInit {
  @Output() close = new EventEmitter<void>();
  visible = false;
  title = 'Modal title';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.router.url);
    console.log('create', this.visible);
  }

  ngAfterViewInit(): void {
    console.log('After create');
  }

  openScrollableContent(link) {
    this.visible = true;
    this.router.navigate(['/home', link[0], link[1] /*{outlets: {name: [link[0], link[1]]}}*/ ]);
    console.log(this.router.url);
  }
}
