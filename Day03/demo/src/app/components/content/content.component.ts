import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  contentData: string = 'Data From Content';

  constructor() {
    console.log('1-ctor');
  }
  ngOnInit(): void {
    // connect API
    this.myEvent.emit(this.contentData);
  }
}
