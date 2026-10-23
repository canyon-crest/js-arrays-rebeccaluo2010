let colors = ["red", "green", "blue"];
for(let i=0; i<colors.length; i++){
    console.log("Color: "+colors[i]);
}
let numbers = [];
let str = "";
let sum = 0;
let count = 0;
let maxi = 0;
for(let i=0; i<=4; i++){
    numbers.push(parseFloat(prompt("Enter number "+(i+1))));
    if(i==0){
        str+=numbers[i];
        maxi=numbers[i];
    }
    else{
        str+=", "+numbers[i];
    }
    sum+=numbers[i];
    if(numbers[i]%2===0){
        count++;
    }
    if(numbers[i]>maxi){
        maxi=numbers[i];
    }
}
console.log("Numbers: "+str);
console.log("Sum: "+sum);
console.log("Average: "+(sum/(numbers.length)));
console.log("Even count: "+count);
console.log("Largest: "+maxi);