import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikersComponent } from './bikers.component';

describe('BikersComponent', () => {
  let component: BikersComponent;
  let fixture: ComponentFixture<BikersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
