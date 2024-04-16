const myForEach = (arr , callBack) => {
  for (let eachName of arr ){
    callBack(eachName)
  }
};
// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
// const result = myForEach( myNames, (name) => console.log(`Hi, ${name}!`));

// console.log(result);



const myMap = (arr , callBack) => {
let untouched = []
for (let eachNum of arr){
untouched.push(callBack(eachNum))}
return untouched
};

// const myNums = [1, 4, 9, 16];
// const myDoubledNums = myMap(myNums, (x) => x * 2);
// console.log(myDoubledNums);
// console.log(myNums);

const myFind = (arr , callBack) => {
for (let eachFind of arr){
  if (callBack(eachFind) ){
    return eachFind
  
  }
}

};
// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
// const nameHasB = myFind(myNames, (name) => name.includes('B'));
// console.log(nameHasB);

const myFilter = (arr , callback) => {

  let newArray = []

  for (let eachName of arr ){
    if (callback(eachName) ){
      newArray.push(eachName)
    }
  }
  return newArray
};
// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
// const namesWithB = myFilter(myNames, (name) => name.includes('B'));
// console.log(namesWithB)


const sortWords = (names) => {
  let newNamesSorted = names.slice()
  newNamesSorted.sort()
return newNamesSorted
};
// const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
// const sortedNames = sortWords(unsortedNames);
// console.log(sortedNames); 
// console.log(unsortedNames); 

const sortNumbers = (arrOfNums) => {
let newArrOfNums = arrOfNums.slice()
newArrOfNums.sort((val1, val2) => val1 - val2)
return newArrOfNums
};
// const unsortedNums = [1, 100, 14, 3, 2, 11];
// const sortedNums = sortNumbers(unsortedNums);
// console.log(sortedNums);
// console.log(unsortedNums);

const sortNumbersBetter = (arrOfNums , isDescending) => {
  let newArr = arrOfNums.slice()
  if (isDescending === true){
    newArr.sort((val1 , val2) => val2 - val1 )
  } else {
    newArr.sort((val1 , val2) => val1 - val2 )
  }
  return newArr
};
// const unsortedNums = [1, 100, 14, 3, 2, 11];
// const bigToSmall = sortNumbersBetter(unsortedNums, true);
// console.log(bigToSmall);
// const smallToBig = sortNumbersBetter(unsortedNums); 
// console.log(smallToBig); 


const sortUsersByOrder = (arr) => {
  let newArr = arr.slice()
  newArr.sort((a , b) => a.order - b.order)
  return newArr
};

// const users = [
//   { name: 'Alice', order: 1 },
//   { name: 'Bob', order: 3 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Debbie', order: 4 },
// ];
// const sortedUsers = sortUsersByOrder(users);
// console.log(sortedUsers);

const sortUsersByName = (array) => {
  let newArray = array.slice()
  for (let key of Object.keys(newArray)){
  newArray.sort()
  }
  return newArray
};
const users = [
  { name: 'Bob', order: 1 },
  { name: 'Charlie', order: 3 },
  { name: 'Alice', order: 2 },
  { name: 'Debbie', order: 4 },
];
const sortedUsers = sortUsersByName(users);
console.log(sortedUsers);

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
