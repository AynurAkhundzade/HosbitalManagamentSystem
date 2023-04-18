import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistantPageComponent } from './asistant-page.component';

describe('AsistantPageComponent', () => {
  let component: AsistantPageComponent;
  let fixture: ComponentFixture<AsistantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistantPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsistantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
