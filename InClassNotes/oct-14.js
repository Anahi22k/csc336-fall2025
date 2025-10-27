let arr =[true, false, "cat"]
console.log(arr)

arr.push("dog")
console.log(arr)

arr.pop();
console.log(arr)

let spliced = arr.splice(1,1);
console.log(arr)
console.log(spliced)


//These (a and b) are equvilent
//a
arr.forEach(val => {
    console.log(val);
});
//b
for (let val of arr) {
    console.log(arr)
}

//wants us to do: and while loops
for (let i=0; i < arr.length; i++){
    console.log(arr[i])
}
let arr2 = [1, 2, 3, 4, 5]
let lessthan3 = arr.filter( el => {
    if (el < 3) {
        return True;
    } else {
        return false;
    }
});
// we can use maping it, .sort 

/**
 API request you can make:
Get Post Put Delete

Header - contains the type of requesst
body - any additional information you want to pass

for today: 

set up and express node js no 
collect into json obj and send it over as a post
have server do soemthing with it
and server will send json back
using node to host front end
 */