import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class ArrayMethodService {

  constructor( ) { }

getArrayData() {
  const arrayObj = [
    {id:1, name : 'Kishor', age : 25},
    {id:2, name : 'Sunil', age : 28},
    {id:3, name : 'Harshad', age : 13},
    {id:4, name : 'Piyush', age : 15},
    {id:5, name : 'Shambhuraje', age : 10}, ]
    
    
}


}
