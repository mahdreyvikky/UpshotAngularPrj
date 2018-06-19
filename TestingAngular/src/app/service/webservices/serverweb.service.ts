import { Injectable } from '@angular/core';
import { RequestOptions,Headers,Http} from '@angular/http';
//import { HttpClient} from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
//import  { map } from 'rxjs/operators'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
//import { User } from './user';

@Injectable()
export class ServerwebService {
    
    jsondata;
    
    isTrueVal:boolean=false;
    
    //url= '/AngularAPI/rest/consumer/angular2ServerAPI';
    
    constructor(private http: Http) {}
    
 getJSONArrayVal(){
         return [{"name":"vikky"},{"age":"roopashree"}];
 }
    /*fetchDataFromServer(){
      this.isTrueVal=true;
      this.jsondata =
          this.http.get('/AngularAPI/rest/consumer/angular2ServerAPI')
     .map(res => res.json().userId);
      
    }*/
 
 fetchDataFromServer(){
     this.isTrueVal=true;
     let headers=new Headers({'Content-type':'application/json'});
     let options=new RequestOptions({headers:headers});
     this.jsondata =
         this.http.post('/AngularAPI/rest/consumer/angular2ServerAPIPost',{"username":"hello","password":"12345"},options)
    .map(res => res.json().userId).catch(this.handleError);
     
   }
 
 
 private handleError(error: Response) { 
     console.error("Service Error"+error); 
     return Observable.throw(error.json().error()); 
  } 
     

}
