import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


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

  dispalyContactForm(){
    //document.getElementById('contactButton').style.display='none';
    document.getElementById('model').style.display='block';
  }
  closeContact(){
    document.getElementById('model').style.display='none';
  }
  submitClicked(){
    document.getElementById('model').style.display='none';
  }

}
