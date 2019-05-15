import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDisplayComponent } from './mission-display.component';

describe('MissionDisplayComponent', () => {
  let component: MissionDisplayComponent;
  let fixture: ComponentFixture<MissionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
