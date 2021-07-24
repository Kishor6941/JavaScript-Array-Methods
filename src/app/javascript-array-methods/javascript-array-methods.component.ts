import { Component, OnInit } from '@angular/core';
import { ArrayMethodService } from '../array-method.service'
@Component({
  selector: 'app-javascript-array-methods',
  templateUrl: './javascript-array-methods.component.html',
  styleUrls: ['./javascript-array-methods.component.scss']
})
export class JavascriptArrayMethodsComponent implements OnInit {
  arrayAllName: string[];

  constructor(private arrayMethodService: ArrayMethodService) { }

  ngOnInit(): void {
    this.getFilterMethod();
  }

  getFilterMethod() {
    const arrayObj = [
      { id: 1, name: 'Kishor', age: 25 },
      { id: 2, name: 'Sunil', age: 28 },
      { id: 3, name: 'Harshad', age: 13 },
      { id: 4, name: 'Piyush', age: 15 },
      { id: 5, name: 'Shambhuraje', age: 10 },
      { id: 6, name: 'Kiran', age: 10 },]

    // Filter
    //  get name of below 15 age people 
    const lessThan15ageNameSignleLine = arrayObj.filter((objItem) => objItem.age < 15).map(item => item.name)
    console.log(lessThan15ageNameSignleLine);

    // return data whose id is 3

    const idData = arrayObj.filter((item) => item.id == 3)
    console.log(idData);


    // Map Method
    // Get array of all names

    this.arrayAllName = arrayObj.map((item) => item.name)

    console.log("map", this.arrayAllName);

    //  print id and name 
    let arrayidName = arrayObj.map((item) => ({ name: item.name, id: item.id }))
    console.log(arrayidName);

    // Some Method

    let checkSpecifiName = arrayObj.some(item => item.name === 'Kishor')
    let checkAgeIs25 = arrayObj.some(item => item.age === 25)

    console.log(checkSpecifiName, 'checkSpecifiName');
    console.log(checkAgeIs25, 'checkAgeIs25');

    // Reduce

    let sumOfAge = arrayObj.reduce((accumulator, currentValue) => {
      console.log(accumulator, currentValue.age);
      return accumulator + currentValue.age
    }, 0)
console.log(sumOfAge,'sumOfAge');

    let checkSameAge = arrayObj.reduce((acc, cur)=>{
      let ageData = cur.age+ ' ' + 'Years Old';
      if(acc[ageData]) {
        acc[ageData]++;
      }
      else {
        acc[ageData] = 1;
      }
      return acc;
    },{})
console.log(checkSameAge,'checkSameAge');

  }

}
