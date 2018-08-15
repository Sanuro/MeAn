import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  constructor(private _httpService: HttpService){}
  gold = 0;
  adventureLog = [];

  ngOnInit(){

    this.createGold();
    this.adventureLog = [];

  };

  createGold(){
    let observable = this._httpService.createGold();
    observable.subscribe(data => {
      console.log("created gold");
      this.getGold();
    });

  }

  getGold(){
    let observable = this._httpService.getGold();
    observable.subscribe(data => {
      console.log(data)
      this.gold = data.gold[0].gold;
    })
  }

  farmer(){
    var num = Math.floor(Math.random()*4+2)
    this.adventureLog.push(`You earned ${num} gold from the farm.`)
    num += this.gold;
    let observable = this._httpService.updateGold(num);
    observable.subscribe(data =>{
      this.getGold()
      document.getElementById("farmFlash").innerHTML = "you clicked farm."
      setTimeout(this.resetPlace, 2000)
    });
  }

  caver(){
    var num = Math.floor(Math.random()*6+5)
    this.adventureLog.push(`You earned ${num} gold from the cave.`)
    num += this.gold;
    let observable = this._httpService.updateGold(num);
    observable.subscribe(data =>{
      this.getGold()
      document.getElementById("caveFlash").innerHTML = "you clicked cave."
      setTimeout(this.resetPlace, 2000)
    });
  }

  houser(){
    var num = Math.floor(Math.random()*9+7)
    this.adventureLog.push(`You earned ${num} gold from the house.`)
    num += this.gold;
    let observable = this._httpService.updateGold(num);
    observable.subscribe(data =>{
      this.getGold()
      document.getElementById("houseFlash").innerHTML = "you clicked house."
      setTimeout(this.resetPlace, 2000)
    });
  }

  casinoer(){
    var change = Math.floor(Math.random()*2)
    var num = Math.floor(Math.random()*101)
    if (change == 0){
      num *=(-1)
      this.adventureLog.push(`You lost ${num} gold at the casino.`)
    }else{
      this.adventureLog.push(`You earned ${num} gold at the casino.`)
    }
    num += this.gold;
    let observable = this._httpService.updateGold(num);
    observable.subscribe(data =>{
      this.getGold()
      document.getElementById("casinoFlash").innerHTML = "you clicked casino."
      setTimeout(this.resetPlace, 2000)
    });
  }

  resetPlace(){
    document.getElementById("farmFlash").innerHTML = "";
    document.getElementById("houseFlash").innerHTML = "";
    document.getElementById("caveFlash").innerHTML = "";
    document.getElementById("casinoFlash").innerHTML = "";

  }


}
