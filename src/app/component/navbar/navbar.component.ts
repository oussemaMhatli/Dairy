import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //route to main componment
  goToMain(){
    this.router.navigate(['/'])
  }
    //route to diary componment

  goToDairy(){
    this.router.navigate(['diary'])
  }
    //route to about componment

  goToAbout(){
    this.router.navigate(['about'])
  }
}
