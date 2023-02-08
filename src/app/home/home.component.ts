import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //   { path: 'user-information', component: UserInformationComponent },
  // { path: 'about-us', component: AboutUsComponent },
  // { path: 'contact', component: ContactComponent }
  public selectedPath: any;
  public menus = [
    { id: 1, menu: 'User Information', path: 'user-information' },
    { id: 2, menu: 'About Us', path: 'about-us' },
    { id: 3, menu: 'Contact', path: 'contact' },
    { id: 4, menu: '23-December-22', path: '' },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.selectedPath = "user-information";
  }

  ngOnInit(): void { }

  goTo(path: any) {
    console.log('path', path);
    if (path) {
      this.selectedPath = path;
      this.router.navigate([path]);
      this.router.navigate([path], { relativeTo: this.activatedRoute });
    }
  }

}
