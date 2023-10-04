import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class WrapperModule { }
