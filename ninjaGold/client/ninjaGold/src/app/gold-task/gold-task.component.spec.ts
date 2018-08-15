import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldTaskComponent } from './gold-task.component';

describe('GoldTaskComponent', () => {
  let component: GoldTaskComponent;
  let fixture: ComponentFixture<GoldTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
