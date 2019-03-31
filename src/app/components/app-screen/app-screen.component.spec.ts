import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScreenComponent } from './app-screen.component';

describe('AppScreenComponent', () => {
  let component: AppScreenComponent;
  let fixture: ComponentFixture<AppScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
