import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/homemessage/${name}`);
    //console.log('helo world service');
  }
}
