import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOfficialPageComponent } from './user-official-page.component';

describe('UserOfficialPageComponent', () => {
  let component: UserOfficialPageComponent;
  let fixture: ComponentFixture<UserOfficialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOfficialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOfficialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
