import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'mtl-test-lib-control',
  templateUrl: './test-lib-control.component.html',
  styleUrls: ['./test-lib-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestLibControlComponent),
      multi: true
    }
  ]
})
export class TestLibControlComponent implements ControlValueAccessor {

  @Input()
  placeholder = 'hogehoge';
  inputControl = new FormControl('');
  isDisabled = false;

  private onChange = (value: any) => {};
  private onTouched = () => {};
  get writeText() {
    return this.inputControl.value;
  }

  constructor() {
    this.inputControl.valueChanges.subscribe(x => {
      this.onChange(x);
      this.onTouched();
    });
  }

  // Control Value Accessor Interface
  writeValue(obj: any): void {
    this.inputControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
