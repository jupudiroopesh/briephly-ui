import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewsFeedComponent } from './app-news-feed.component';

describe('AppNewsFeedComponent', () => {
  let component: AppNewsFeedComponent;
  let fixture: ComponentFixture<AppNewsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNewsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
