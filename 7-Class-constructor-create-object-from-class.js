class Student {
    constructor(Sid, name) {
        this.id = Sid;
        this.name = name;
        this.schoolName = 'Chhangalnaiya Academy';
    }
}

const student1 = new Student(101, 'kabir');
const student2 = new Student(102, 'Hasan');

console.log(student1);
console.log(student2);

// find specific item
console.log(student1.name);