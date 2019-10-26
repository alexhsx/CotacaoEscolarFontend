import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseGeneratorComponent } from './base-generator.component';

const routes: Routes = [
  { path: '', component: BaseGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseGenaratorModuleRoutingModule { }
