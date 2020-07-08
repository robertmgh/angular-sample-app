import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    HttpClientXsrfModule.disable()
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'token',
    //   headerName: 'Authorization'
    // })

  ],
  providers: [
    // Error: Cannot mix multi providers and regular providers
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class SecurityModule {

  constructor(@Inject(HTTP_INTERCEPTORS) int: any, private auth: AuthService) {
    console.log(int)
    auth.getToken()
  }
}
