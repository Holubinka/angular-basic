import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements AfterViewInit {
  @ViewChild('ref', {static: false}) modal: any;
  modalWindow = null;
  constructor(private modalService: NgbModal,
              private router: Router) {
  }

  ngAfterViewInit() {
    if (!this.modalService.hasOpenModals()) {
      this.modalWindow = this.modalService.open(this.modal, {scrollable: true});
    }
  }


  openScrollableContent(link) {
    this.router.navigate([link[0], link[1]]);
  }

}
