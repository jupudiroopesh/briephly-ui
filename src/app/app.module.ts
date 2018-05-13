import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { filter, catchError, delay, map, switchMap, take, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNewsFeedComponent } from './app-news-feed/app-news-feed.component';
import { AppAboutBriephlyComponent } from './app-about-briephly/app-about-briephly.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNewsFeedComponent,
    AppAboutBriephlyComponent,
    AppNavBarComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
