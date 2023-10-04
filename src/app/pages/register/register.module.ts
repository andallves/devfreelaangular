import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { WrapperModule } from 'src/app/features/wrapper/wrapper.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ButtonModule,
    WrapperModule
  ]
})
export class RegisterModule { }
