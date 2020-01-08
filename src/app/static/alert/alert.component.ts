import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../shared/dal/alert/alert.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000;

  public text: string;
  public type = 'success';

  aSub: Subscription;

  constructor(
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.aSub = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.text = '';
      }, this.delay);
      this.router.navigate(['/', 'home']);
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
