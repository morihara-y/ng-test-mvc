import { Message } from './../models/message.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  messages: Array<Message> = [];

  constructor() { }

  ngOnInit(): void {
    this.messages = [{
      text: 'test1',
      datetime: new Date()
    },
    {
      text: 'test2',
      datetime: new Date()
    }];
  }

}
