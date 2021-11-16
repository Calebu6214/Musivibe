import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {  BehaviorSubject,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  
  registerNewUser(userData:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/users/',userData);
  }

  loginUser(userData:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/',userData);
  }

  
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}