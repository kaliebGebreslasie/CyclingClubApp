import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiverideComponent } from './liveride.component';

describe('LiverideComponent', () => {
  let component: LiverideComponent;
  let fixture: ComponentFixture<LiverideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiverideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiverideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
