import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplylearnComponent } from './simplylearn.component';

describe('SimplylearnComponent', () => {
  let component: SimplylearnComponent;
  let fixture: ComponentFixture<SimplylearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplylearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplylearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
