import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewclubComponent } from './newclub.component';

describe('NewclubComponent', () => {
  let component: NewclubComponent;
  let fixture: ComponentFixture<NewclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
