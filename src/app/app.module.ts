import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './static/main-layout/main-layout.component';
import {HomePageComponent} from './modules/home/pages/home-page/home-page.component';
import {PostPageComponent} from './modules/post-page/post-page.component';
import {AlertComponent} from './static/alert/alert.component';
import {SearchPipe} from './shared/pipe/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CreatePageComponent} from './modules/create-page/create-page.component';
import {QuillModule} from 'ngx-quill';
import { CommentsPageComponent } from './modals/comments-page/comments-page.component';
import { AuthorPageComponent } from './modals/author-page/author-page.component';
import { ModalPageComponent } from './static/modal-page/modal-page.component';
import { PaginationComponent } from './modules/home/modules/pagination/pagination.component';
import { PaginatePipe } from './shared/pipe/paginate.pipe';
import {RefDirective} from './shared/directives/ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    SearchPipe,
    AlertComponent,
    CreatePageComponent,
    CommentsPageComponent,
    AuthorPageComponent,
    ModalPageComponent,
    PaginationComponent,
    PaginatePipe,
    RefDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  exports: [RouterModule],
  entryComponents: [ModalPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
