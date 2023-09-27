// var a ="this is my first practice session";
// var b="hi";
// var c="apple,orange,lemon";

// 1 length
/*var a ="this is my first practice session";
console.log(a.length);
// anything enclosed in () is methods . but length is property 
// slice()
// 2 uppercase
var b ="this is my first practice session";
console.log(b.toUpperCase())
// 3 index
var c="apple,orange,lemon";
document.getElementById('demo').innerHTML=c[2]
//4 slice
var c="apple,orange,lemon";
document.getElementById('demo').innerHTML=c.slice(5,9)       
//5 indexof  here we will get 6. orange starts from 6 th position
var c="apple,orange,lemon,apple,orange";
document.getElementById('demo').innerHTML=c.indexOf("apple")  
document.getElementById('demo1').innerHTML=c.lastIndexOf("apple")  
// 6 charat 
var c="apple,orange,lemon,apple,orange";
document.getElementById('demo').innerHTML=c.charAt(15)
document.getElementById('demo1').innerHTML=c.charCodeAt(15)
//reverse method is not applicable for string . but for arrays 

//7 concat

document.getElementById('demo').innerHTML=a + c + b
document.getElementById('demo1').innerHTML=a.concat(c,b)   

//8 trim
var d= "      hi   hw      are   you    "
document.getElementById('demo').innerHTML=d.trim()
//if u want to trim in between use reg ex
document.getElementById('demo1').innerHTML=d.replace( /\s\s+/g, " ")  

//9 slice
document.getElementById('demo').innerHTML=a.slice(-5,-1)
document.getElementById('demo1').innerHTML=a.substring(7,19) 

// 10 chaining of method

var e= "welcome to my family";
var f = e.slice(1,7);
document.getElementById('demo').innerHTML=f
var g=f.indexOf("c")
document.getElementById('demo1').innerHTML=g

//instead 
document.getElementById('demo').innerHTML=e.slice(1,7).indexOf("c")  


// 11 truthy and falsy values
0,null undefined " ",false

if (false==0){
    document.getElementById('demo').innerHTML="false" 
}else{
    document.getElementById('demo1').innerHTML="true" 
}

//12 data types

primitive (boolean,number,null,undefined)
non primitive(object ,array  --ref data type )

//tofixed
The toFixed() method converts a number to a string.

The toFixed() method rounds the string to a specified number of decimals.
The toString() returns a number as a string.



----------1-------------------

var age= parseInt(prompt("enter ur age"));
// if (age>=18){
//     document.write("u are egible for DL")
// }else{
//     document.write("notegible for DL")
// }

document.write(age>=18 ? "eligible":"noteligible")
 
----------2------------------

//let age =40;
let age = parseInt(prompt("enter ur age"));
if (age<= 10)
{
    price=10
}
else if (age>10 && age<= 20)
{
    price=20
}
else if (age>20 && age<=30)
{
    price=30
}
else
{
    price=40
}
document.write("tckt price is ",price)



var str1="Today is"
var str2 = "   a beautiful day"
var str3="in Hawai"
var result=document.write(str1+" "+ str2.trim()+ " "+ str3)


var ent = prompt("enter ur alphabet");
var alp=ent.toLowerCase();
switch(alp){
    case "a":
        ent="you entered a vowel :"+ alp;
        break;
    case "e":
        ent="you entered a vowel :"+ alp;
        break;
    case "i":
        ent="you entered a vowel :"+ alp;
        break;
    case "o":
        ent="you entered a vowel :"+ alp;
        break;
    case "u":
        ent="you entered a vowel :"+ alp;
        break;
   
    default :
        ent = "you entered consonants : " +alp 
        
    
} 
document.write(ent) 

var ent = prompt("enter ur alphabet");
var alp=ent.toLowerCase();
switch(alp){
    case "a": case "e": case "i": case "o":case"u":
        ent="you entered a vowel :"+ alp;
        break;
    case "b": case "c": case "d": case "f": case "g": case "h": case "j": case "k": case "l": case "m": case "n": case "p": case "q": case "r": case "s": case "t": case "v": case "w": case "x": case "y": case "z":
        ent="you entered consosnants: "+ alp;
        break;
    default:
       ent="non alphabets" + alp;
    
    }
    document.write(ent);




// var a = parseInt(prompt("enter ur one side"));
// var b = parseInt(prompt("enter ur second side"));
// var c = parseInt(prompt("enter ur third side"));
// if (a == b == c){
//     document.write("equilateral traingle")
// } else if ( a == b || b == c || a == c){
//     document.write("isoscles traingle")
// }
// else{
//     document.write("scalane traingle")
// }
----------------------------------------------
var a= parseFloat(prompt("enter first number"));
var b= parseFloat(prompt("enter second number"));
var d;
var c=prompt("enter your operation : +,-,/,*");
switch(c){
    case "+":
    d= a + b;
    e= "addition is :" +d
    break;
    case "-":
    d=a - b;
    e= "subtraction is :" +d
    break;
    case "/":
    d= a/b;
    e= "division is :" +d
    break;
    case "*":
    d= a*b;
    e= "multipl is :" +d
    break;
    default:

}
document.write(e)


// or a = c+d
//console.log(`${c}+${d}=${a}`)
------------------------


var a= parseFloat(prompt("enter ur units"));
var b;


if (a<=50){
    b=a*0.50;
}else if (a<=150){
    b=0.50*50 + (a-50)*0.75;
}else if (a<=250){
    b=0.50*50 + 100*0.75 + (a-150)*1.20;
}else{
    b=0.50*50 + 100*0.75 + 100*1.2 + (a-250)*1.50;
    // c=b*(20/100)
    // p=b+c
    
}
if (b>250){
    b= b*(20/100) + b
}
document.write(b)
--------------------------------------------------


var a = parseInt(prompt("enter ur one side"));
var b = parseInt(prompt("enter ur second side"));
var c = parseInt(prompt("enter ur third side"));
if (a == b && b== c){
    document.write("equilateral traingle")
} 
else if ( a == b || b == c || a == c){
    document.write("isoscles traingle")
}
else{
    document.write("scalane traingle")
}

reverse-------------------
var a= "helo world"
var c= b(a)
document.write(c)

function b(str){
   var d= str.split('');
   var e=d.reverse();
   var f=e.join();
   return f;
}

palindrome-------------------------

function fun(str){
    var c=str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    var d=c.split('').reverse().join();
    
    return c===d
}
var a="sneha"
var b=fun(a);
if (b){
    document.write("palindrome")
}else{
    document.write("not")
}

-------------------------------------
fibonoci

var limit=20;
var fib=fun(limit);
// fib.forEach(function (value) {
//     console.log(value);
//   });
// fib.foreach(function(p){
//     document.getElementById('demo').innerHTML=p;
// }); for each line o/p

function fun( num){
    a=[0,1];
    for (var i=2; i<=num;i++){
        var c=a[i-1]+a[i-2];
        a.push(c)
    }
    return a
}

document.write(fib)
-----------------------------factorial--------------


var a= 3;
var b= fun(a);
document.write(b);

function fun(num){
    if (num ==0 || num==1){
        return 1;
    }

    var result=1;
    for (var i =2 ; i<= num; i++){
        result=result * i;
    }
    return result;
}
------------------------leap ------------------
*/

var a= parseInt(prompt("enter a year"));
var b=fun(a);
document.write("leap year ",b)

function fun(leap){
    var leap;
    if (leap%4 == 0){
        return leap;
    } else {
        return "not"
    }
}












