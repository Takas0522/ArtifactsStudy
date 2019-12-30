import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibControlComponent } from './test-lib-control.component';

describe('TestLibControlComponent', () => {
  let component: TestLibControlComponent;
  let fixture: ComponentFixture<TestLibControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLibControlComponent ]
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
