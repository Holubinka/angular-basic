import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import ukLocale from '@angular/common/locales/uk';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './static/main-layout/main-layout.component';
import {HomePageComponent} from './modules/home/pages/home-page/home-page.component';
import {PostPageComponent} from './modules/post-page/post-page.component';
import {AlertComponent} from './static/alert/alert.component';
import {AlertService} from './shared/dal/alert/alert.service';
import {SearchPipe} from './shared/pipe/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CreatePageComponent} from './modules/create-page/create-page.component';
import {EditPageComponent} from './modules/edit-page/edit-page.component';
import {QuillModule} from 'ngx-quill';
import { CommentsPageComponent } from './modals/comments-page/comments-page.component';
import { AuthorPageComponent } from './modals/author-page/author-page.component';
import { ModalPageComponent } from './static/modal-page/modal-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PaginationComponent } from './modules/home/modules/pagination/pagination.component';
import { PaginatePipe } from './shared/pipe/paginate.pipe';
import {RefDirective} from './shared/directives/ref.directive';

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
    ModalPageComponent,
    PaginationComponent,
    PaginatePipe,
    RefDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [RouterModule],
  providers: [AlertService],
  entryComponents: [ModalPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
