import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavanaComponent } from './ravana.component';

describe('RavanaComponent', () => {
  let component: RavanaComponent;
  let fixture: ComponentFixture<RavanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RavanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
