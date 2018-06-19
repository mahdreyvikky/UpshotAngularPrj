import { Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';



//import { ajax } from 'rxjs/ajax';//Error code
//import 'rxjs/operator/add/map';
//import 'rxjs/operator/add/filter';

//import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operator/map';//Error code
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, catchError } from 'rxjs/operators';
/*
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';*/

/*import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';*/


import {LoginService} from './login.service';
import {ServerwebService} from './service/webservices/serverweb.service';

import { Http} from '@angular/http';
//import { HttpClient} from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
//import  { map } from 'rxjs/operators'
import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/do';
//import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService,ServerwebService]
})
export class AppComponent  {
  title = 'app';
  //jsondata;
  //isTrueVal:boolean=false;
  user:LoginService;
  http:Http;
  webservice:ServerwebService;
  
  url= '/AngularAPI/rest/consumer/angular2ServerAPI';
  //name=webservice.getValue();
  value='';
  
    
  constructor(private usr:LoginService, private htp: Http, private api:ServerwebService ){
      this.user=usr;
      this.http=htp;
      this.webservice=api
  }
  
  onKey(event: any){
      this.value=event.target.value;
  }
  
  
  
  
  

  /* fetchDataFromServer(){
    this.isTrueVal=true;
    this.jsondata =
        this.http.get('/AngularAPI/rest/consumer/angular2ServerAPI')
   .map(res => res.json());
    
  }*/
  
 
 

  /*constructor(private injector: Injector) { }
  
  ngOnInit() {
    this.car = this.injector.get(Car);
    this.heroService = this.injector.get(HeroService);
    this.hero = this.heroService.getHeroes()[0];
  }*/
  /* const apiData = ajax('/api/data').pipe(
          map(res => {
            if (!res.response) {
              throw new Error('Value expected!');
            }
            return res.response;
          }),
          catchError(err => of([]))
        );
         
        apiData.subscribe({
          next(x) { console.log('data: ', x); },
          error(err) { console.log('errors already caught... will not run'); }
        });*/
  
  /*const posts = Observable
  .ajax('https://jsonplaceholder.typicode.com/posts')
  .map(e => e.response);


  const htmlSubscription = posts
  .subscribe(res => {
   console.log(JSON.stringify(res, null, 2));
  });*/
  
/*  const apiData = Observable.ajax('https://jsonplaceholder.typicode.com/posts');
//Subscribe to create the request
apiData.subscribe(res => console.log(res.status, res.response));*/
  

  
   
}
