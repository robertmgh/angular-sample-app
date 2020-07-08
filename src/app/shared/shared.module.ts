import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesnoPipe } from './yesno.pipe';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [YesnoPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    YesnoPipe,
    FormsModule
  ]
})
export class SharedModule { }
