import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppControlsComponent } from './app-footer.component';

describe('AppFooterComponent', () => {
  let component: AppControlsComponent;
  let fixture: ComponentFixture<AppControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
