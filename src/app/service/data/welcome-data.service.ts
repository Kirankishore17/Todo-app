import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HelloWorldBean {
  constructor(public message:string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/home/bean');
    //console.log('helo world service');
  }

  executeHelloServicePathVariable(name) {
    // let basicAuthHeader = this.createBasicHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization:basicAuthHeader
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/homemessage/${name}`
    // , {headers:headers}
    );
  }
  
  // createBasicHttpHeader() {
  //   let username = 'kk'
  //   let password = '123'
  //   let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeader;
  // }
}
