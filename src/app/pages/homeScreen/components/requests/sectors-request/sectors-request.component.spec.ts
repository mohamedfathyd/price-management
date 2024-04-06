import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsRequestComponent } from './sectors-request.component';

describe('SectorsRequestComponent', () => {
  let component: SectorsRequestComponent;
  let fixture: ComponentFixture<SectorsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorsRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
