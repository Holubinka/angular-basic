import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent {

  @Input() buttonText: string;
  @Input() object: any;

  constructor(private modalService: NgbModal) {}

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
