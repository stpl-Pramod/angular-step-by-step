import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-step-by-step';
  fetchInput='';
  count=0;
  disabled=false;
  name="peter";
  show = true;
  getData(name:string, mob:number){
    alert(name)
    alert(mob)
  }
  getValue(e:any){
    console.log("function called",e)
    // alert(e)
  }
  getHover(){
    console.log("hover called")
  }
  getInput(e:any){
    console.log(e);
    this.fetchInput = e
  }
  counter(type:any){
type==="minus"?this.count--:this.count++
  }
 
}
