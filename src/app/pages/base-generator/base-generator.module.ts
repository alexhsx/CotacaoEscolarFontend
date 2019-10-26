import { NgModule } from '@angular/core';
import { BaseGenaratorModuleRoutingModule } from './base-generator-routing.module';
import { BaseGeneratorComponent } from './base-generator.component';

const comps = [
    BaseGeneratorComponent
];

@NgModule({
    declarations: comps,
    exports: comps,
    imports: [
        BaseGenaratorModuleRoutingModule
    ]
})
export class BaseGenaratorModule { }
