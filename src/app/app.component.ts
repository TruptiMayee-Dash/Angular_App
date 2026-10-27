import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day1-angular-app';

  showMessage(): void{
    alert("Day 1 completed! My Angular Journy has started")
  }

  username="Truptimayee Dash";
  role="Angular Developer";
  experience=1.5;
  completedProjects=3;
  clickCount=0;
  skills: String[]=[
    "Angular",  'Typescript','Html','CSS','JavaScript'
  ];

  sayHello(): void{
    alert('hello,${this.username}!');
  }
  increaseCount():void{
    this.clickCount++;
  }
  resetCount(): void{
    this.clickCount= 0;
  }

  
  
}
