import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {

    getUserDetails():string[] { 
            
          //userList:string[]=["Upshot1,"Upshot2","Upshot3]; 
            
            return ["Upshot1","Uphost2", "Upshot3"]; 
            
    }
    
    uname:string;
    pass:string;
    
    
    set name(value:string) {
      this.uname = value;
    }

    get name():string {
      return this.uname;
    }
    
    
    //constructor(private http: HttpClient) { }
  
 /* public user: LoginService;
  public emp: LoginService;
  public description = 'No DI';
  
      username:string;
      password:string;    
  
      constructor() {
          this.user = new LoginService();
          this.emp = new LoginService();
      }

    setUsername(name:string):void{
      this.username=name;
    }

    getUsername():string{
      return this.username;
    }*/


}
