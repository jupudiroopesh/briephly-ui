import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutBriephlyComponent } from './app-about-briephly.component';

describe('AppAboutBriephlyComponent', () => {
  let component: AppAboutBriephlyComponent;
  let fixture: ComponentFixture<AppAboutBriephlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutBriephlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutBriephlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
