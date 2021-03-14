import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prashantMishra';


constructor(){
}
  navList:any;
  hambergerButton:any;
  ngOnInit(){
    this.hambergerButton = document.getElementById('hamburger');
    this.navList = document.getElementById('nav-list');
   
  }
  toggleButton(){
    this.navList.classList.toggle('show');
  }
  hamClicked(){
    this.toggleButton();
  }

}
