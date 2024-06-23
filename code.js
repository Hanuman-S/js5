//Functions
//Function parameters are local variables and have a scope of only the function
function sum(a,b){
    return a+b;
}

console.log(sum(9,8));

function arr_sort(arr){
    let i,temp;
    for(j=arr.length;j>1;j--){
        for(i=1;i<j;i++){
            if(arr[i]<arr[i-1]){
                temp=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=temp;
            }
        }        
    }
    return arr;
}

function arr_search(arr,el){
    arr_sort(arr);
    console.log(`Your Sorted Array is ${arr}`);
    let mid=Math.round(arr.length/2);
    let beg=0;
    let end=arr.length-1;
    if(el==arr[mid-1]){
        return mid;   
    } else if(el>arr[mid-1]){
        beg=mid;
    } else {
        end=mid-2;
    }
    for(let i=beg;i<=end;i++){
        if(arr[i]==el){
            return i+1;
        }
    }
}

function arr_display(arr){
    console.log(arr);
}

let array=[12,34,1,87,2,9,25];
console.log(arr_search(array,9));

//Arrow Functions
//Compact way to define functions
// Syntax : const functionName = (para1,para2,...) => {functionCode}
const arrowSum = (a,b) => {
    console.log(a+b);
};

arrowSum(5,6);

//Number of Vowels
function vow(str){
    let numVow=0;
    str=str.toLowerCase();
    for(let i of str){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            numVow++;
        }
    }
    return numVow;
}

let string='I like eating very much'
console.log(`Number of Vowels in ${string} = ${vow(string)}`);

//Arrow Number of Vowels
let arrowVow = (str) =>{
    let numVow=0;
    str=str.toLowerCase();
    for(let i of str){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            numVow++;
        }
    }
    return numVow;
};
console.log(`Number of Vowels in ${string} by Arrow Function = ${arrowVow(string)}`);

//ForEach loop 
//Only used in arrays
//Syntax : arr.forEach(callBackFunction)
// val,idx and arr are built in paramemters for the array from forEach. They are optional
//Higher Order Functions take functions as parameters or return functions
array.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

//Displaying square of array elements
let testArray=[5,1,24,65,8]
console.log(`The testArray = ${testArray}`);
testArray.forEach((val)=>{
    console.log(val**2);
});

//arr.map(callBackFxn(val,idx,arr){}) : Creates a new array from the results of the given operation
//squaring array elements
newArray = testArray.map((val)=>{
    return val**2;
});
console.log(newArray);

//arr.filter(callBackFxn(val,idx,arr){}) : Creates a new array which satisfies the given condition
evenArray = testArray.filter((val)=>{
    return val%2===0;
})
console.log(evenArray);

/* arr.reduce((prev,curr)=>{}) : let's say the array is [1,2,3,4,5] . The function first performs given operation on 1 and 2 and stores the result in prev and then performs the operation on prev and 3 and this continues till the end and then the function returns prev. Thus this function reduces the array to a single value */

//Sum of elements of array
sumArray = testArray.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(sumArray);

//Biggest element in Array
bigArray = testArray.reduce((prev,curr)=>{
    return (prev>curr) ? prev : curr;
})
console.log(bigArray);

//Marks>90
marks=[95,86,99,92,65,78,53]
marks_90=marks.filter((val)=>{
    return val>90;
})
console.log(marks_90);

//Sum till n and Product till n
let n=prompt('Enter the number of elements in array');
let natNum=[];
for(let i=1;i<=n;i++){
    natNum.push(i);
}
console.log(`The given array is ${natNum}`);
let sumNatNum=natNum.reduce((prev,curr)=>{
    return prev+curr;
});
let mulNatNum=natNum.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(`The sum of all element of array = ${sumNatNum}`);
console.log(`The product of all elements of array = ${mulNatNum}`);