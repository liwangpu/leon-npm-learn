
class Person {

  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`我是${this.name},今年${this.age} 岁了`);
  }
}