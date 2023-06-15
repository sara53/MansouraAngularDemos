import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges {
  @Input() loginData: string = '';
  @Input() flag: boolean = false;
  componentTitle: string = 'Login Component';

  ngOnChanges() {
    this.flag
      ? (this.componentTitle = 'Login Component')
      : (this.componentTitle = 'Register Component');
  }
}
