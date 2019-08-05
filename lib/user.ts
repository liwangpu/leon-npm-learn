export class User {
    name: string;
    age: number;
    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet() {
        console.log(`Hello,I'm ${this.name},${this.age} years old!`);
    }
}

export function DoSomething(user: User) {
    user.name = "Mr. " + user.name;
}