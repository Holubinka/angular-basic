import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../shared/dal/alert/alert.service';
import {Post} from '../../shared/dal/post/models';
import {PostService} from '../../shared/dal/post/post.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  submitButton = false;

  constructor(
    private postsService: PostService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      title: this.form.value.title,
      userId: 1,
      body: this.form.value.text
    };

    this.submitButton = true;
    this.postsService.create(post).subscribe( post1 => {
      this.postsService.posts.unshift(post1);
      this.form.reset();
      this.alert.success('Success');
      this.submitButton = false;
    });
  }
}
