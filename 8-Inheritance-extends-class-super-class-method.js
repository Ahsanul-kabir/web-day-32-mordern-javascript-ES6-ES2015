class Parent {
    constructor() {
        this.fatherName = "Abdul Khalil";
    }
}

class Child extends Parent {
    constructor(name) {
        super(); // parent class er sob show korar jonno
        this.name = name;
    }

    // class method
    getFullName() {
        return this.name + " bin " + this.fatherName;
    }
}

const baby = new Child('Hasan');
const baby2 = new Child('Habib');

console.log(baby);
console.log(baby2);

console.log(baby.getFullName());
console.log(baby2.getFullName());