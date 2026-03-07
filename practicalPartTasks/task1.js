const person = {
    name: 'Veronika',
    age: 19,
    job: 'developer',
}

console.log('name:', Object.getOwnPropertyDescriptor(person,'name'));
console.log('age:', Object.getOwnPropertyDescriptor(person,'age'));
console.log('job:', Object.getOwnPropertyDescriptor(person,'job'));

Object.defineProperties(person,{
    name: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
    age: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
    job: {
        writable: false,
        enumerable: false,
        configurable: false,
    }
});

person.name = "Anna";
console.log("After name = 'Anna':", person.name);

person.age = 20;
console.log("After age = 20:", person.age);

person.job = "student";
console.log("After job = 'student':", person.job);

console.log("Enumeration with Object.keys():", Object.keys(person));

delete person.name;
delete person.age;
delete person.job;
console.log("Is 'name' in person after delete person.name:", 'name' in person);
console.log("Is 'age' in person after delete person.age:", 'age' in person);
console.log("Is 'job' in person after delete person.job:", 'job' in person);
