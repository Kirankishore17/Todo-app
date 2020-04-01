import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() : void {
    if(this.username==='kk' && this.password==='123'){
      this.flag = false
      this.router.navigate(['welcome',this.username])
    }
    else{
      this.flag = true
    }
    console.log(this.username);
  }

}
