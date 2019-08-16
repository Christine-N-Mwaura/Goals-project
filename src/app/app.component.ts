import { Component } from '@angular/core';
import { Goal } from './goal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
// goals: string[];
//
// constructor(){
//   this.goals = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case']
// }
// }

export class AppComponent{
  public cone=true;
  public ctwo=true;

  toggle(){
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
}
}
