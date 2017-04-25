import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventgetComponent } from './eventget.component';

describe('EventgetComponent', () => {
  let component: EventgetComponent;
  let fixture: ComponentFixture<EventgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
