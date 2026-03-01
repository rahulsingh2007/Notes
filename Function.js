/* let users =[
    {
        firstName: "John",
        lastName: "Doe",
        age: 10
    },   
    {
        firstName: "Rahul",
        lastName: "Singh",
        age: 10
    }
];


function printUserDetail(users){
    console.log(`His name is ${users.firstName} ${users.lastName} and age is ${users.age}.`);
}
// printUserDetail(users[0]);
users.forEach(printUserDetail); */

/* let courses = ["mern", "python", "qa"]
function choose(courses) {
    return courses[0];
}
console.log(choose(courses)); */
/* let users=[];
addNewUser("Rahul",18,"Bkt")
function addNewUser(name,age,location){
    let user ={
        name:name,
        age:age,
        location:location
    }
    users.push(user);
}
console.log(users) */

let students = [
    {
        name: "Ramesh",
        scores: [
            { exam: "first-term", gpa: 2 },
            { exam: "second-term", gpa: 4 }
        ]
    },
    {
        name: "Rahul",
        scores: [
            { exam: "first-term", gpa: 1 },
            { exam: "second-term", gpa: 3 }
        ]
    }
];

function getStudentInfo(students) {
    return(`${students[0].name} scored GPA ${students[0].scores[0].gpa} in first-term and ${students[0].scores[1].gpa} in second-term.`);
}

console.log(getStudentInfo(students));









