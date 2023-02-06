import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Unit Conversion';
  link ='https://google.com';
  
  constructor(){
    setTimeout(()=>{
      this.title = this.title==='Temperature Unit Conversion'?'Volume Unit Conversion':'Temperature Unit Conversion';
    }, 2000);
  }

  changeTitle(){
    this.title = 'title changed!';
  }

  updateTitle(event:Event){
    this.title = (event.target as HTMLInputElement).value;
  }
}
