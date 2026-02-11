// console.log("unwanted buggy code")
// console.log("Hello world!")

/* 
comments
ctrl + / line comment
shift + alt +a  block comment
*/
/* 
let color = "pink"
console.log("Tshering favourite color is ", color) */
// 1)Variable
/* let fullname = "Shyam"
console.log(fullname)
fullname = "Hari"
console.log(fullname)
fullname = "Ram"
console.log(fullname) */

/* let firstName = "Hari"
let middleName = "Kumar"
middleName = "Bahadur"

let fullName = firstName + " " + middleName
console.log(fullName) */
/* 
const PI = 3.141592653689793;
// const PI = 3.14;

console.log(PI.toFixed(2)); */

/* let a = 1;
let b = 2;
let c;
console.log(a, b);

c = a;
a = b;
b = c;
console.log(a, b);

console.log("double quote = ",'" "') */
// 2)Object 
/* let color ={
    name: "red",
    hexValue: "#FF0000",
    rgbValue: "rgba(255,0,0)"
}
console.log(`hex value of color ${color.name} is ${color.hexValue} and rgb value is ${color.rgbValue}.`)

let myLaptop ={
    name: "DELL",
    storage: "Ram 16gb"
}
console.log(myLaptop)

let person ={
    first_name: "John",
    last_name: "doe",
    age: "15",
    website: "john@doe.com"
}

console.log(`My full name is ${person.first_name} ${person.last_name}.`) */

/* let monitor ={
    model: "samsung",
    hertz: 120
}
 console.log(monitor);

 let obj ={
    name: "Shyam",
    name: "hari",
    Name: "ram"
 }
 console.log(obj.name);
 console.log(obj.Name); */

/* let person = {
    firstName: "Hari",
    lastName: "Kumar",
    country: "India"
}
person.lastName = "Bahadur"
person.country = "Nepal"
console.log(`He is ${person.firstName} ${person.lastName} from ${person.country}.`) */

/* let person = {
    firstName: "Hari",
    lastName: "Bahadur",
    contact: {
        ncell: 9800000000
    }
}
person.contact.ntc = 9700000000
person.address={
    strret: "Putaisadak",
    ward: 16
}

console.log(person); */

/* let person = {
    first_name: "John",
    last_name: "Doe",
    age: 18,
    website: "https://www.johndoe.com"
}
person.fieldToRetrieve = person.first_name
console.log(person.fieldToRetrieve) */

// 3) Array

/* let members = ["Aarya","Aasha","Anisha","Amit","Anjana","Bijay","Bikash"]
console.log(members[0]);
console.log(members[1]);
console.log(members[2]);
// members[6] ="Bishal" overwriting bijay 
console.log(members[6]);
console.log(members); */

/* let brands = ["apple", "samsung", "lg", "nokia"]
console.log(brands);
console.log("in second element , we have", brands[1])
brands[1] = "Sony"
console.log("in second element , we have", brands[1]) */

/* let colors =[
    {name: "white", hex:"#ffffff"},
    {name: "red", hex:"#ff0000"},
    {name: "blue", hex:"#0000FF"},
    {name: "green", hex:"#00FF00"},
    {name: "black", hex:"#000000"}
]
// console.log(colors[0])
console.log(colors[0].name) */

/* let students = [
    {
        name: "Ramesh",
        scores: [
            { exam: "first-term", gpa: 2 },
            { exam: "second-term", gpa: 4 }
        ]
    },
    {
        name: "Arpit",
        scores: [
            { exam: "first-term", gpa: 4 },
            { exam: "second-term", gpa: 2.9 }
        ]
    }
]
console.log(students[0].name, "scored gpa", students[0].scores[0].gpa, "in first-term and", students[0].scores[1].gpa, "in second-term.")
console.log(students[1].name, "scored gpa", students[1].scores[0].gpa, "in first-term and", students[1].scores[1].gpa, "in second-term.")
 */

let students = [
    {
        roll: 1,
        courses: ["web", "mobile"]
    },
    {
        roll: 2,
        courses: ["ML", "mobile"]
    }
]
students[1].courses[1] = "AI"
students[0].courses[1] = "AI"
console.log(students)

