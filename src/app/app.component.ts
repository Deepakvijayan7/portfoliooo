import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var name: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  ngOnInit(){
    AOS.init();
    
   }
}
