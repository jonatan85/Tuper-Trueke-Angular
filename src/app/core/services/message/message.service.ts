import { Injectable, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject: ReplaySubject<string> = new ReplaySubject<string>();

  constructor() {
    this.messageSubject.next('https://images.unsplash.com/photo-1675236272377-aeadff0db186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
  }

  public getMessage(): Observable<string> {
    return this.messageSubject;
  }

  public setMessage(value: string) {
    this.messageSubject.next(value);
  }
}
