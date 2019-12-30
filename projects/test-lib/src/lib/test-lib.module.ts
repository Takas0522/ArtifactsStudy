import { NgModule } from '@angular/core';
import { TestLibControlComponent } from './test-lib-control/test-lib-control.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestLibControlComponent
  ],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    TestLibControlComponent
  ]
})
export class TestLibModule { }
