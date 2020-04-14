import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{
  
  constructor(
    private basicAuthenticationService:BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'user'
    // let password = 'password'
    // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeader = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()
    
    if(basicAuthHeader && username){
      request = request.clone({
        setHeaders : {
          Authorization:basicAuthHeader
        }
      })
    }
    return next.handle(request);
  }

}
