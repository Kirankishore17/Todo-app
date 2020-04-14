import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HelloWorldBean } from './data/welcome-data.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(username, password){
    if(username==='kk' && password==='123'){
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedin(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem('token')
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }

  
  executeAuthenticationService(username, password) {
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization:basicAuthHeader
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers:headers})
                .pipe(
                  map(
                    data => {
                      sessionStorage.setItem('authenticatedUser', username)
                      sessionStorage.setItem('token', basicAuthHeader)
                      return data;
                    }
                  )
                );
    //console.log('helo world service');
  }
  

}

export class AuthenticationBean{
  constructor(public message:string){}
   
}
