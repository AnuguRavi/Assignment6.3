var sum = 0; //declaring the variable sum
var i;
//for loop
for (i = 1; i <= 1000; i++) {
    sum += i;   
}

console.log("Sum of first 1000 natural numbers using for loop is : ", sum);

sum = 0;    //initializing the sum to 0
var i = 1;  //initializing the i to 1

//while loop
while (i <= 1000) {
    sum += i;
    i += 1;
}

console.log("Sum of first 1000 natural numbers using while loop is : ", sum);