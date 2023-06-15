import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentData: string = 'Data From App Component';
  test: string = '';
  getData(x: any) {
    this.test = x;
  }
}
