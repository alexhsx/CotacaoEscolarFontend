import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CotacaoModule } from './pages/cotacao/cotacao.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { SharedModule } from './components/shared/shared.module';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    CotacaoModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: LoaderService, useClass: LoaderService },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
