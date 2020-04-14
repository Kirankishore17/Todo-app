import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  errorMessage = 'Invalid'
  flag = false


  constructor(private router: Router, 
    private hardcodedAuth: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleBasicAuthLogin() : void {
    this.basicAuthService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.flag = false
            this.router.navigate(['welcome',this.username])
          },
          error => {
           console.log(error);
           this.flag = true            
          }          
        )      
  }

  
  handleLogin() : void {
    if(this.hardcodedAuth.authenticate(this.username, this.password)){
      this.flag = false
      this.router.navigate(['welcome',this.username])
    }
    else{
      this.flag = true
    }
  
  }
  
}
