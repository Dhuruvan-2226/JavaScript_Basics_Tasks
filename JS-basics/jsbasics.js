//Task-1:
alert("Hello World")

//Task-2:
aa=18
bb="String"
cc=true
console.log(aa+"\n"+bb+"\n"+cc)

//Task-3
num1=14
num2=18
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)


//Task-4
str11="Ash"
str12="Kirito"
console.log(str11+" "+str12)

//Task-5
console.log(typeof aa)
console.log(typeof(str11))
console.log(typeof(cc))

//Task-6
// Single-line Comment
//   *It is used for commenting the single line
//     eg-//alert("Hello World")
// Multi-line Comment line:
//  *It is used for commenting the multiple lines of the Code
    /*eg-console.log(typeof a)
    console.log(typeof(str1))
    console.log(typeof(c))*/

//Task-7:
// We can declare multiple variables using semicolon
// Eg->a=10;b=12;c=14;
// We can declare only one variable without using semicolon
// Eg->a=10
// b=12

//Task-8:
for(i=0;i<3;i++)
{
    for(j=0;j<2;j++)
    {
        console.log(i,j)
    }
}

//Task-9:
n1=10;n2=12;n3=14;
console.log(n1+" "+n2+" "+n3)

//Task-10:
// Its in the html file
// it first the runs script tagg inside the body

//Task-11:
value=22
console.log(value)
//Without using use script ,we no need to use the variables such as(let,var,const)

//Task-12:
"use strict"
let val=26
console.log(val)
//While using use script ,we need to use the variables such as(let,var,const)

//Task-13:
"use strict"
let vals=12
try{
delete vals
}
catch(error)
{
    console.log(error.message)
}
/*You cannot delete var, let, or const variables.
Deleting variables in strict mode results in a SyntaxError.
The delete operator works only on object properties, not variables.*/

//Task-14:
k=10
console.log(k);
"use strict"
var j="Dhuruvan"
console.log(j)

//Task-15:
/*"use strict";
try {
    let for="Nasa"; 
} catch (error) {
    console.log(error.message); 
}*/

//Task-16:
let z=10
z=14
console.log(z);
if(true)
{
    let y=12
}
//console.log(y)

const sample=10
const obj={name:"dhuru"}
obj.name="Dhuruvan"
console.log(obj.name)

var l=10
l=14
console.log(l);
if(true)
{
    var k=12
}
console.log(k)

//Task-17:
/*const vars=10
vars=13
console.log(vars)*/
//We can't redeclare and reinitialize in the const variable

//Task-18:
let leetcode
console.log(leetcode)

//Task-19:
console.log(typeof aa)
console.log(typeof(str11))
console.log(typeof(cc))

//Task-20:
let myVar=14
myVar=18
console.log(myVar)

//Task-21:
let var_int=10
let var_str="Ash"
let var_bool=true
let var_n=null
let var_ud
let var_obj={name:"kirito",anime:"Sword Art Online"}
console.log(var_int)
console.log(var_str)
console.log(var_bool)
console.log(var_n)
console.log(var_ud)
console.log(var_obj.anime)

//Task-22
console.log(typeof var_int)
console.log(typeof var_bool)
console.log(typeof var_str)
console.log(typeof var_n)
console.log(typeof var_obj)
console.log(typeof var_ud)

//Task-23
let unique_id=Symbol("id")
console.log(typeof unique_id)

//Task-24
let var_nu=null
console.log(typeof var_nu)

//Task-25
/*var:
    *Function-scoped.
    *A variable declared with var is accessible within the function where it is declared, regardless of block boundaries or out of function (e.g., inside loops or if statements).
let:
    *Block-scoped.
    *A variable declared with let is accessible only within the block(but not oustside the block) {...} in which it is declared.
*/

//Task-26
//Explicit:
let my_str = "22";
let my_num = Number(my_str);
console.log(my_num); 
console.log(typeof my_num); 
//or
// let str = "42";
// let num = parseInt(str, 10); 
// console.log(num);
//or
//let str = "42.5";
// let num = parseFloat(str);
// console.log(num); 

//Implicit:
let mystr = "26";
let mynum = mystr*1;//or +str or str-0
console.log(mynum);
console.log(typeof mynum)

//Task-27
let bool=true;
let str=String(bool);// bool+"" or bool.toString()
console.log(str); 
console.log(typeof str);

//Task-28
n11=18
n12=14
console.log(n11+n12)
console.log(n11-n12)
console.log(n11*n12)
console.log(n11/n12)
console.log(n11%n12)

//Task-29
console.log(n11++)
console.log(n11--)
console.log(++n12)
console.log(--n12)

//Task-30
let result = 14+18/9*2-10; 
console.log(result);

//Task-31
let a = 10, b = 5;
console.log(a > b);   
console.log(a < b);   
console.log(a >= b);  
console.log(a <= b);  

//Task-32
console.log(5 == "5");   
console.log(5 === "5"); 

//Task-33
let str1 = "apple", str2 = "banana";
console.log(str1 < str2); 

//Task-34
console.log(5 != "5");   
console.log(5 !== "5");

//Task-35
console.log(null == undefined);  
console.log(null === undefined);

//Task-36
let num14 = 7;
if (num14 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Task-37
let numss = -10;
if (numss > 0) {
    console.log("Positive");
} else if (numss < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Task-38
let nums = 10;
let results = (nums % 2 === 0) ? "Even" : "Odd";
console.log(results); 

//Task-39
let variable = null;
console.log(variable ? "Valid" : "Invalid"); 

//Task-40
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); 

//Task-41
x=10;
y=30;
isbool=(x<y && x>y);
arebool=(x<y || x>y);
wasbool=!(x==y);
console.log(isbool)
console.log(arebool)
console.log(wasbool)

//Task-42
x=14;
if(x>=0 && x<=14){
    console.log("It's in the range");
}
else{
    console.log("It's not in the range");
}

//Task-43
isbool=true;
console.log(!isbool);

//Task-44
console.log(true || (console.log("Short-circuited"), false));  
console.log(false && (console.log("Short-circuited"), true)); 

//Task-45
x=14
y=14
console.log(x==y && !(x==y));

//Task-46
function Sum(z1,z2)
{
    console.log(z1+z2);
}
Sum(14,18);

//Task-47
function AreaofRec(l,b)
{
    console.log(l*b);
}
AreaofRec(14,18);

//Task-48
function Withoutparameter()
{
    console.log("Hi");
}
Withoutparameter();

//TAsk-49
function Nothing()
{

}
console.log(Nothing());

//Task-50
function Default(x=14)
{
    console.log(`age is ${x}`);
}
Default();
Default(18);

//Task-51
const greet=(name)=>`Hello,${name}`;
console.log(greet("Ash"))
console.log(greet("Dhuruvan"))
console.log(greet("Kirito"))
console.log(greet("Nasa Shikito"))

//Task-52
const add=(q,w)=> q+w;
console.log("Addition of two numbers:"+add(22,26));
console.log("Addition of two numbers:"+add(22,18));
console.log("Addition of two numbers:"+add(114,224));

//Task-53
const isEven=(num22)=> (num22%2==0)?true:false;
console.log(isEven(22))
console.log(isEven(26))
console.log(isEven(18))
console.log(isEven(19))

//Task-54
const maxValue=(na,nb)=>{
    if(na>nb)
    {
        return na;
    }
    else
    {
        return nb;
    }
}
console.log(maxValue(22,26));
console.log(maxValue(22,18));
console.log(maxValue(22,8));

//Task-55
const myobj={
    value:10,
    multiplyTraditional : function(num114)
    {
        return this.value*num114;
    },
    multiplyArrow : (num224)=>
    {
        return this.value*num224;
    }
};
console.log(myobj.multiplyTraditional(2));
console.log(myobj.multiplyTraditional(4));