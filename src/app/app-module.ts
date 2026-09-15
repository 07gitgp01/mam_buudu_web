import { NgModule, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { jwtInterceptor } from './core/jwt.interceptor';
import { loadingInterceptor } from './core/loading.interceptor';
import { errorInterceptor } from './core/error.interceptor';
import { ToastContainerComponent } from './core/toast-container.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [App, LandingComponent, ToastContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor, errorInterceptor])),
  ],
  bootstrap: [App],
})
export class AppModule {}
