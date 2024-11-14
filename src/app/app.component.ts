import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'angular-step-by-step';
  fetchInput='';
  count=2;
  disabled=false;
  name="peter";
  show = true;
  color="green";
  users = ['ajay', 'vijay', 'rakesh', 'kiran'];
  userDetails=[
    {username:'ajay', email:'ajay@gmail.com', phone:9279879554, address:{plot:20, city:'dhankavadi',district:'Pune'}},
    {username:'vijay', email:'vijay@gmail.com', phone:8579879554, address:{plot:22, city:'Shirpur',district:'Dhule'}},
    {username:'rakesh', email:'rakesh@gmail.com', phone:9879879554, address:{plot:23, city:'shirur',district:'Beed'}},
    {username:'kiran', email:'kiran@gmail.com', phone:90879879554, address:{plot:24, city:'swargate',district:'Pune'}}
  ]
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
  updateStyle(){
    this.color = 'red';
  }
  userData:any={};
  getFormData(data:NgForm){
    console.log(data);
    this.userData = data;
  }
  toggleData(){
    this.show=!this.show;
  }
  todoList:any=[]
  getTodoData(data:NgForm){
    this.todoList.push(data);
    console.log(this.todoList);
  }
  deleteTodo(e:any){
    this.todoList.splice(e,1);
    console.log(e);
  }
  // updateData(item:string){
  //   console.log(item)
  // }
}
