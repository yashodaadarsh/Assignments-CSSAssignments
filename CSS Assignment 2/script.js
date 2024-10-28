// // let string1 = "yashoda";
// // let string2 = "ADARSH";
// // console.log("The length of string1 is ",string1.length);
// // console.log(string1 + string2);
// // console.log(string1.toUpperCase())

// // console.log("String 2 to lowercase",string2.toLowerCase());
// // let ans = `${string1}${string2}`;
// // let ans2 = ans.substring(2,13);
// // console.log(ans2);

// let name = 'adarsh \'is\' a lover boy ';
// let ans = name.split(" ");
// console.log(ans);

// // using the join method bro 

// let array = ["India","is","the","best","country"];
// let ans1 = array.join(" ");
// console.log(ans1);


function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10