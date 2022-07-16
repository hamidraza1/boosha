import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'boosha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'main';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(environment.api + '/api').subscribe((res) => {
      console.log(res);
    });
  }
}
