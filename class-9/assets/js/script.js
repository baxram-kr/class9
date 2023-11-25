// Get the button and content elements by their IDs
const myButton = document.getElementById('myBtn');
const content = document.getElementById('content');

// Function to toggle the content visibility
function toggleContent() {
  if (content.style.top === '0px' || content.style.top === '') {
    content.style.top = '-1000px';
  } else {
    content.style.top = '0px';
  }
}

// Attach a click event listener to the button, executing the toggleContent function
myButton.addEventListener('click', toggleContent);

let array = [2,22,33,32,30]
let sort = array.sort()
console.log(sort);
let arr = [1,2,3,4,5]
function sumArray(arr){
    let sum = 0;
    for(let i =0 ; i<arr.length;i+=2){
        sum +=arr[i]
    }
    return sum
}
console.log(sumArray(arr));




let fruits = [
    { name: "apple", quantity: 10, price: 100 },
    { name: "nok", quantity: 5, price: 200 },
    { name: "banan", quantity: 6, price: 300 },
    { name: "gilos", quantity: 1, price: 150 },
  ];

//   let q = fruits[0].quantity;
//   let p = fruits[0].price;
//   let sum = q*p

//   console.log(sum);
// let sum =0
//   for(let i = 0 ; i<fruits.length;i++){
//       sum+=fruits[i].quantity*fruits[i].price;
//   }
//   console.log(sum);

let menArray = [1,222,33,21,22,12,33,22,8]
let nArray=[]
for(i=0;i<menArray.length;i++){
    if(menArray[i]%2==0){
       nArray.push(menArray[i])
    }
}
console.log(nArray);



  