import { MessageService } from './../services/message.service';
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

  constructor(private service: MessageService) { }

  ngOnInit(): void {
    this.refreshAll();
  }

  ngOnChanges(): void {
    if (!this.postedMessage || !this.postedMessage.text) {
      return;
    }
    this.messages.push(this.postedMessage);
  }

  deleteAll(): void {
    this.messages = [];
    this.service.deleteAll().subscribe(_ => {
      console.log('delete is done');
    });
  }

  refreshAll(): void {
    this.service.getAll().subscribe(res => {
      this.messages = res;
    });
  }
}
