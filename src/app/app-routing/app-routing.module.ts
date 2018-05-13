import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppNewsFeedComponent } from '../app-news-feed/app-news-feed.component';
import { AppAboutBriephlyComponent } from '../app-about-briephly/app-about-briephly.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: AppNewsFeedComponent
  },
  {
    path: 'about',
    component: AppAboutBriephlyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
