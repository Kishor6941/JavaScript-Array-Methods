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

// Found

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 5);

console.log(found);
// expected output: 12


//  Includes

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate


const arrayInclude = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// Index of

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

// findIndex

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const arrayfindIndex = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3


let fruits = ['Apple', 'Banana']

console.log(fruits.length)

let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1

let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]

let lasts = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

let firsts = fruits.shift() // remove Apple from the front
// ["Banana"]

let newLengths = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]

let pos = fruits.indexOf('Banana')
// 1

let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let poss = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]

}




}


 




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// Array Methods in JavaScript 