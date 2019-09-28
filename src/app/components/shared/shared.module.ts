import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
//https://github.com/vikobg/first-class-js/tree/master/angular-loader