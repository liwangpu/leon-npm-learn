export class Teacher {

    constructor(public name: string, public age: number) {
    }

    greet() {
        console.log(`I'm ${this.name},${this.age} years old!`);
    }
}