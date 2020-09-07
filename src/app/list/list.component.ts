import { Message } from './../models/message.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit, OnChanges {

  messages: Array<Message> = [];
  @Input() postedMessage: Message;

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

  ngOnChanges(): void {
    if (!this.postedMessage || !this.postedMessage.text) {
      return;
    }
    this.messages.push(this.postedMessage);
  }

}
