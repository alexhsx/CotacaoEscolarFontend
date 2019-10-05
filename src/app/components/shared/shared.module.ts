import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    CommonModule
  ],
  exports: [LoaderComponent]
})
export class SharedModule { }
