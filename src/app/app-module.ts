import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { jwtInterceptor } from './core/jwt.interceptor';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [App, LandingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([jwtInterceptor])),
  ],
  bootstrap: [App],
})
export class AppModule {}
