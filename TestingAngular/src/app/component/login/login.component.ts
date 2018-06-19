import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
//import { FormsModule } from '@angular/forms';
import {LoginDto} from '../../LoginDto';
import {FormService} from './form.service';

import {ServerwebService} from '../../service/webservices/serverweb.service'
//console.log("Username assss"+this.model.username);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService,FormService]
})
export class LoginComponent implements OnInit {
    
  result;  
//name:string="Enter UserName";
//pswd:string="Enter password";
//loginService:LoginService;
  formService:FormService;
  webservice:ServerwebService;
//username:string;
//password:string; 

model = new LoginDto('','');

    
  constructor(private loginService:LoginService, private frmService:FormService, private api:ServerwebService) {
      this.formService=frmService;
      this.webservice=api;
  }
  
  onSubmit(){
      //console.log("Username s"+this.model.username);
      //console.log("password s"+this.model.password);
      //this.formService.name=this.model.username;
      //this.formService.pwd=this.model.password;
      
      this.formService.postFormCall(this.model.username,this.model.password);
      //this.formService.fetchDataFromServer();
      //this.webservice.fetchDataFromServer();
      //console.log("Uname"+this.formService.name);
      //console.log("pwd"+this.formService.pwd);
  }
  

 
 
  /*onClick(event : any){
    this.username=event.target.value;
    console.log("Username as "+event.target.value);
    console.log("password as "+event.target.value);
}

onClick1(event : any){
    this.password=event.target.value;
    console.log("Username as "+event.target.value);
    console.log("password as "+event.target.value);
}*/

//loginService.set

  ngOnInit() {
  }

}
