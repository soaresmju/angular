import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomarComponent } from './components/somar';
import { SomarService } from './service';



@NgModule({
  declarations: [SomarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SomarComponent
  ],
  providers: [
    SomarService
  ]
})
export class SomarModule { }
