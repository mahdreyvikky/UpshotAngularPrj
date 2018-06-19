import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http} from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
//import {ServerwebService} from '../../service/webservices/serverweb.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class FormService {
 
    jsondata;
  constructor(private http: Http) { }
  
  /*uname:string;
  pwd:string;
  
  set name(value:string) {
      this.uname = value;
    }

    get name():string {
      return this.uname;
    }*/
  fetchDataFromServer(){
      //this.isTrueVal=true;
      let headers=new Headers({'Content-type':'application/json'});
      let options=new RequestOptions({headers:headers});
      this.jsondata =
          this.http.post('/AngularAPI/rest/consumer/angular2ServerAPIPost',{"username":"hello","password":"12345"},options)
     .map(res => res.json().userId).catch(this.handleError);
      
    }
    
    postFormCall(user,pass){
        //this.isTrueVal=true;
        console.log("Username name"+user);
        console.log("Password pwd"+pass);
        let headers=new Headers({'Content-type':'application/json'});
        let options=new RequestOptions({headers:headers});
        
        this.jsondata =
            this.http.post('/AngularAPI/rest/consumer/angular2ServerAPIPost',{"username":user,"password":pass},options)
       .map(res => res.json().userId).catch(this.handleError);
        
        console.log("Resultant "+this.jsondata);
        
        /*this.jsondata =
            this.http.get('/AngularAPI/rest/consumer/angular2ServerAPI')
       .map(res => res.json().userId).catch(this.handleError);*/
        
        
        
      }
    private handleError(error: Response) { 
        console.error("Service Error"+error); 
        return Observable.throw(error.json().error()); 
     } 
       
}
