import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibControlComponent } from './test-lib-control.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('TestLibControlComponent', () => {
  let component: TestLibControlComponent;
  let fixture: ComponentFixture<TestLibControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLibControlComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
