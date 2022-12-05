import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttdirComponent } from './attdir.component';

describe('AttdirComponent', () => {
  let component: AttdirComponent;
  let fixture: ComponentFixture<AttdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttdirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
