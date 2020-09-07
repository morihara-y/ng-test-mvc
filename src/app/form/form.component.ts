import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  text: string;

  @Output() messagePost: EventEmitter<Message> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.text = '';
  }

  post(): void {
    if (!this.text) {
      return;
    }
    const message: Message = {
      text: this.text,
      datetime: new Date()
    };
    this.messagePost.emit(message);
    this.text = '';
  }
}
