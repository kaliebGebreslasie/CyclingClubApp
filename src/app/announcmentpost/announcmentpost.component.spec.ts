import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncmentpostComponent } from './announcmentpost.component';

describe('AnnouncmentpostComponent', () => {
  let component: AnnouncmentpostComponent;
  let fixture: ComponentFixture<AnnouncmentpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncmentpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncmentpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
