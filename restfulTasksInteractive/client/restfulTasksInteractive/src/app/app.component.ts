import { Component} from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Restful Tasks Interactive';
  userSubmitting: any;
  tasks = [];
  str: string;


  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getUserSubmission();
  }


  gettingUserSubmission(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      console.log("inside data is: ", data["data"][0].description)
      this.tasks = data["data"];

    })
  }

  getUserSubmission(){
    let observable = this._httpService.makerTasker(this.userSubmitting);
    observable.subscribe(data => {
      console.log("getting them tasks", data);
      this.gettingUserSubmission();
    })

}}
