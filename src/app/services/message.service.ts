import { Message } from './../models/message.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = '/v1/message/';
const enum PATHS {
  ALL = 'all',
  ADD = 'add',
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(BASE_URL + PATHS.ALL, {});
  }

  post(message: Message): Observable<Message> {
    return this.http.post<Message>(BASE_URL + PATHS.ADD, message);
  }

  deleteAll(): Observable<string> {
    return this.http.delete<string>(BASE_URL + PATHS.ALL, {});
  }
}
