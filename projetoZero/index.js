const person = {
    id: 1,
    name: "Matheus",
    age: 17
}

//console.log(person);

// function printAge(objPerson){
//     console.log(objPerson.age);
// };

// const printAge = (objPerson) => {
//     const { age, name } = objPerson;
//     console.log(name, age);
// };

// const printAge = ({ age, name }) => {
//     console.log(name, age);
// };

// const printAge = ({ age, name }) => console.log(name, age);
// printAge(person);

const people = [
    {
        id:1,
        name:"Matheus",
        age:17,
        salary: 2000
    },
    {
        id:2,
        name:"Gabriela",
        age:21,
        salary: 2500
    },
    {
        id:3,
        name:"Maria",
        age:12,
        salary: 3000
    }
];

// console.log(people);

// const getById = (people, id) => {
//     const person = people.find((p) => p.id === id);
//     return person;
// };

// const getById = (people, id) => people.find((p) => p.id === id);

// const objPerson = getById(people, 2)

// const getById = (people=[], id=0) => {
//     return people.filter((p) => p.id === id);
// };

// const foundPeople = getById(people, 2)

// const getByAge = (people=[],age=0) => {
//     return people.filter((p) => p.age >= age);
// };

// const foundPeople = getByAge(people, 16);

// console.log(`Objeto retornado ${JSON.stringify(foundPeople)}`);

// const array = [1,2,3]

// const newArray = array.map((item) => item * 2);
// console.log(newArray);

const newSalary = people.map((p) => p.salary * 1.05);

// const recalcSalary = (people=[]) =>{
//     const newSalary = people.map((p) => ({
//         id: p.id,
//         name: p.name,
//         age: p.age,
//         salary: p.salary * 1.05
//     }))

//     return newSalary;
// }

// const recalcSalary = (people=[]) =>{
//     return people.map(({id, name, age, salary}) => ({
//         id,
//         name,
//         age,
//         salary: salary * 1.05
//     }));
// }

const recalcSalary = (people=[]) =>{
    return people.map((person) => ({
        ...person,
        salary: person.salary * 1.05
    }));
}

const peopleWithNewSalary = recalcSalary(people)

console.log(`People with new Salary: ${JSON.stringify(peopleWithNewSalary)}`);

// const sumSalaries = (people=[]) => {
//     return people.reduce((acc, person) => acc + person.salary, 0);
// }

// const totalSalaries = sumSalaries(peopleWithNewSalary);

// console.log(`Total: ${totalSalaries}`);

peopleWithNewSalary.forEach(({id, name, age, salary}) => {
    console.log(`Person Id: ${id}, Name: ${name}, has a salary of ${salary} at ${age}`);
})