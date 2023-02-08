import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})

export class UserInformationComponent implements OnInit {

  public userDetails: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      res => {
        console.log(res);
        this.userDetails = res;
      }//,
      // error => {
      //   alert('No internet | some error occured');
      // }
    );
  }
}