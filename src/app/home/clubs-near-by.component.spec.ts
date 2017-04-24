import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsNearByComponent } from './clubs-near-by.component';

describe('ClubsNearByComponent', () => {
  let component: ClubsNearByComponent;
  let fixture: ComponentFixture<ClubsNearByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsNearByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsNearByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
