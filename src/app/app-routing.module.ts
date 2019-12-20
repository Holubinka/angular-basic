import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './modules/home/pages/home-page/home-page.component';
import {PostPageComponent} from './modules/post-page/post-page.component';
import {CreatePageComponent} from './modules/create-page/create-page.component';
import {AuthorPageComponent} from './modals/author-page/author-page.component';
import {CommentsPageComponent} from './modals/comments-page/comments-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent, children: [
        {path: 'user/:id', component: AuthorPageComponent},
        {path: 'comments/:id', component: CommentsPageComponent}
        ]},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'create', component: CreatePageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
