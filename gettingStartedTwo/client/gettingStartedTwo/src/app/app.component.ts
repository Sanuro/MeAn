import { Component} from '@angular/core';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mean';
  tasks = [];
  num: number;
  randNum: number;
  str: string;
  first_name: string;
  snacks: string[];
  loggedIn: boolean;
  newTask: any;
  onButtonClick(): void { 
    console.log(`Click event is working`);
}
onButtonClickParam(num: Number): void { 
    console.log(`Click event is working with num param: ${num}`);
}
onButtonClickParams(num: Number, str: String): void { 
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
}
onButtonClickEvent(event: any): void { 
    console.log(`Click event is working with event: ${event}`);
}




  constructor(private _httpService: HttpService) {}

  ngOnInit(){
      this.getTasksFromService();
      this.num = 7;
      this.randNum = Math.floor((Math.random() * 2 ) + 1);
      this.str = "Hello Angular Developer";
      this.first_name = "Alpha";
      this.snacks = ["vanilla latte with skim milk", "cookie"];
      this.loggedIn = true;
      this.newTask = {title: "", description: ""};
    }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      console.log("inside data is: ", data["data"][0].description)
      this.tasks = data["data"];

    })
  }

  makeNewTask(){
    let observable = this._httpService.makerTasker(this.newTask);
    observable.subscribe(data => {
      console.log("getting them tasks", data);
      this.getTasksFromService();
    })
  }
  // 
  // getTasksFromService(){
  //   this._httpService.getTasks();
  // }
}

