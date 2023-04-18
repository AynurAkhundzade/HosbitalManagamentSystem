import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsOfficialPageComponent } from './doctors-official-page.component';

describe('DoctorsOfficialPageComponent', () => {
  let component: DoctorsOfficialPageComponent;
  let fixture: ComponentFixture<DoctorsOfficialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsOfficialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsOfficialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
