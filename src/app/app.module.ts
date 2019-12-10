import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import ukLocale from '@angular/common/locales/uk';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {AlertComponent} from './shared/components/alert/alert.component';
import {AlertService} from './shared/services/alert.service';
import {SearchPipe} from './shared/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {QuillModule} from 'ngx-quill';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalPageComponent } from './modal-page/modal-page.component';

registerLocaleData(ukLocale, 'uk');

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    EditPageComponent,
    SearchPipe,
    AlertComponent,
    CreatePageComponent,
    CommentsPageComponent,
    AuthorPageComponent,
    ModalPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NgxPaginationModule,
    NgbModule
  ],
  exports: [RouterModule],
  providers: [AlertService],
  entryComponents: [ModalPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
