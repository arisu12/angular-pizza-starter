import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private.routing';
import { PrivateComponent } from './private.component';
import { HttpClientModule } from '@angular/common/http';
import { APIInterceptorProvider } from '../core/http/api.interceptor';
import { AuthInterceptorProvider } from './services/http/auth.interceptor';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    PrivateRoutingModule,
    HttpClientModule
  ],
  providers: [
    APIInterceptorProvider,
    AuthInterceptorProvider
  ]
})
export class PrivateModule {}
