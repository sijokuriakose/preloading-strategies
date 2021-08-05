import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHComponent } from './comp-h.component';

describe('CompHComponent', () => {
  let component: CompHComponent;
  let fixture: ComponentFixture<CompHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
