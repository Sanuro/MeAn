import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class HttpService {

  constructor(private _http: HttpClient) {}
  
  createGold(){
    return this._http.post("/gold", {gold:0});
  }

  getGold(){
    return this._http.get("/gold");
  }

  updateGold(num){
    return this._http.put("/gold", {num: num})
  }

}


