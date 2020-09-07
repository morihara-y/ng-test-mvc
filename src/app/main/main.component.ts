import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  postedMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  onMessagePost(message: string): void {
    this.postedMessage = message;
  }
}
