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
        courses: ["web", "mobile"],
        isactive: true
    },
    {
        roll: 2,
        courses: ["ML", "mobile"],
        isactive: false
    }
]
students[1].courses[1] = "AI"
students[0].courses[1] = "AI"
// console.log(students[0].roll ," has taken", students[0].courses[0],"and",students[0].courses[1] ,"and it is", students[0].isactive)
console.log(students)